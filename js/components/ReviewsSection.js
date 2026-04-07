import { ref, computed, onMounted } from 'vue'

const API_BASE = 'https://uplink.wh-lab.ru/pe4king-api'

function starsHtml(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n)
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('ru-RU', { day:'numeric', month:'long', year:'numeric' })
}

export default {
  name: 'ReviewsSection',
  setup() {
    const reviews    = ref([])
    const loading    = ref(true)
    const error      = ref('')
    const nameInput  = ref('')
    const textInput  = ref('')
    const rating     = ref(0)
    const hovered    = ref(0)
    const success    = ref(false)
    const submitting = ref(false)
    const imageFile  = ref(null)
    const imagePreview = ref(null)

    // Загрузка отзывов с сервера
    async function fetchReviews() {
      loading.value = true
      error.value = ''
      try {
        const res = await fetch(`${API_BASE}/reviews`)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        reviews.value = await res.json()
      } catch (e) {
        error.value = 'Не удалось загрузить отзывы. Проверьте соединение.'
        console.error('[Reviews]', e)
      } finally {
        loading.value = false
      }
    }

    onMounted(fetchReviews)

    const avgRating = computed(() => {
      if (!reviews.value.length) return 0
      return (reviews.value.reduce((s, r) => s + r.rating, 0) / reviews.value.length).toFixed(1)
    })

    const avgStars = computed(() => starsHtml(Math.round(+avgRating.value)))
    const canSubmit = computed(() => rating.value > 0 && textInput.value.trim().length >= 3 && !submitting.value)
    const displayedStars = computed(() => hovered.value || rating.value)

    function setHover(v) { hovered.value = v }
    function clearHover() { hovered.value = 0 }
    function setRating(v) { rating.value = v }

    // Обработка выбора файла
    function onFileChange(event) {
      const file = event.target.files[0]
      if (!file) return
      if (file.size > 5 * 1024 * 1024) {
        alert('Файл слишком большой. Максимум 5 МБ.')
        return
      }
      imageFile.value = file
      const reader = new FileReader()
      reader.onload = e => { imagePreview.value = e.target.result }
      reader.readAsDataURL(file)
    }

    function removeImage() {
      imageFile.value = null
      imagePreview.value = null
    }

    async function submit() {
      if (!canSubmit.value) return
      submitting.value = true
      error.value = ''

      try {
        const formData = new FormData()
        formData.append('name',   nameInput.value.trim() || 'Тестировщик')
        formData.append('rating', String(rating.value))
        formData.append('text',   textInput.value.trim())
        if (imageFile.value) {
          formData.append('image', imageFile.value)
        }

        const res = await fetch(`${API_BASE}/reviews`, {
          method: 'POST',
          body: formData,
        })

        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.error || `HTTP ${res.status}`)
        }

        const newReview = await res.json()
        reviews.value = [newReview, ...reviews.value]

        // Сброс формы
        nameInput.value = ''
        textInput.value = ''
        rating.value = 0
        imageFile.value = null
        imagePreview.value = null
        success.value = true
        setTimeout(() => success.value = false, 3000)

      } catch (e) {
        error.value = `Ошибка: ${e.message}`
      } finally {
        submitting.value = false
      }
    }

    return {
      reviews, loading, error,
      nameInput, textInput, rating, hovered,
      avgRating, avgStars, canSubmit, displayedStars,
      success, submitting,
      imageFile, imagePreview,
      starsHtml, formatDate,
      setHover, clearHover, setRating,
      submit, onFileChange, removeImage,
    }
  },
  template: `
    <div class="reviews-section" id="reviews">
      <details class="reviews-details" id="reviewsDetails" open>
        <summary class="reviews-summary">
          <div class="reviews-summary-left">
            <span class="reviews-summary-title">Отзывы</span>
            <span class="reviews-count-badge">{{ reviews.length }}</span>
            <div class="reviews-avg" v-if="reviews.length">
              <span class="reviews-avg-stars">{{ avgStars }}</span>
              <span class="reviews-avg-num">{{ avgRating }}</span>
            </div>
          </div>
          <span class="reviews-arrow">▾</span>
        </summary>

        <div class="reviews-body">

          <!-- Список отзывов -->
          <div>
            <div class="reviews-list">
              <div v-if="loading" class="reviews-empty">Загрузка отзывов...</div>
              <div v-else-if="!reviews.length" class="reviews-empty">
                Отзывов пока нет. Будьте первым!
              </div>
              <div
                v-for="r in reviews"
                :key="r.id"
                class="review-card"
              >
                <div class="review-header">
                  <div class="review-author">{{ r.name }}</div>
                  <div class="review-meta">
                    <div class="review-stars">{{ starsHtml(r.rating) }}</div>
                    <div class="review-date">{{ formatDate(r.created_at) }}</div>
                  </div>
                </div>
                <div class="review-text">{{ r.text }}</div>
                <!-- Прикреплённый скрин -->
                <div v-if="r.image_url" class="review-image-wrap">
                  <img
                    :src="'https://uplink.wh-lab.ru' + r.image_url"
                    class="review-image"
                    alt="Скриншот"
                    loading="lazy"
                    @click="window.open('https://uplink.wh-lab.ru' + r.image_url, '_blank')"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Форма -->
          <div class="reviews-form-wrap">
            <span class="reviews-form-label">Оставить отзыв</span>

            <div class="rv-field">
              <label>Имя <span style="color:var(--lo)">(необязательно)</span></label>
              <input
                class="rv-input"
                type="text"
                v-model="nameInput"
                placeholder="Тестировщик"
                maxlength="60"
                autocomplete="off"
              />
            </div>

            <div class="rv-field">
              <label>Оценка</label>
              <div class="star-picker">
                <span
                  v-for="i in 5"
                  :key="i"
                  :class="{ active: i <= displayedStars }"
                  @mouseenter="setHover(i)"
                  @mouseleave="clearHover"
                  @click="setRating(i)"
                >★</span>
              </div>
            </div>

            <div class="rv-field">
              <label>Отзыв</label>
              <textarea
                class="rv-input"
                v-model="textInput"
                placeholder="Расскажите о вашем опыте работы с Pe4King..."
                maxlength="2000"
              ></textarea>
            </div>

            <!-- Загрузка скрина -->
            <div class="rv-field">
              <label>Скриншот <span style="color:var(--lo)">(необязательно, до 5 МБ)</span></label>
              <div v-if="imagePreview" class="rv-preview-wrap">
                <img :src="imagePreview" class="rv-preview-img" alt="preview" />
                <button class="rv-preview-remove" @click="removeImage" title="Удалить">✕</button>
              </div>
              <label v-else class="rv-file-label">
                <span>📎 Прикрепить скрин</span>
                <input
                  type="file"
                  accept="image/*"
                  class="rv-file-input"
                  @change="onFileChange"
                />
              </label>
            </div>

            <button class="rv-submit" :disabled="!canSubmit" @click="submit">
              {{ submitting ? 'Отправка...' : 'Отправить отзыв' }}
            </button>

            <div class="rv-success" v-if="success">✓ Отзыв добавлен, спасибо!</div>
            <div class="rv-error" v-if="error">{{ error }}</div>

            <div class="rv-notice">
              Отзывы хранятся на сервере и видны всем пользователям.
            </div>
          </div>

        </div>
      </details>
    </div>
  `
}
