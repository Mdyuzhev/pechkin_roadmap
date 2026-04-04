import { ref, computed } from 'vue'

const STORAGE_KEY = 'pe4king_reviews_v1'

function loadReviews() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]') }
  catch { return [] }
}

function saveReviews(list) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

function starsHtml(n) {
  return '★'.repeat(n) + '☆'.repeat(5 - n)
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('ru-RU', { day:'numeric', month:'long', year:'numeric' })
}

export default {
  name: 'ReviewsSection',
  setup() {
    const reviews   = ref(loadReviews())
    const nameInput = ref('')
    const textInput = ref('')
    const rating    = ref(0)
    const hovered   = ref(0)
    const success   = ref(false)

    const avgRating = computed(() => {
      if (!reviews.value.length) return 0
      return (reviews.value.reduce((s, r) => s + r.rating, 0) / reviews.value.length).toFixed(1)
    })

    const avgStars = computed(() => starsHtml(Math.round(+avgRating.value)))

    const canSubmit = computed(() => rating.value > 0 && textInput.value.trim().length >= 3)

    const displayedStars = computed(() => hovered.value || rating.value)

    function setHover(v) { hovered.value = v }
    function clearHover() { hovered.value = 0 }
    function setRating(v) { rating.value = v }

    function submit() {
      if (!canSubmit.value) return
      const review = {
        id: Date.now().toString(),
        name: nameInput.value.trim() || 'Тестировщик',
        rating: rating.value,
        text: textInput.value.trim(),
        date: new Date().toISOString()
      }
      reviews.value.push(review)
      saveReviews(reviews.value)
      nameInput.value = ''
      textInput.value = ''
      rating.value = 0
      success.value = true
      setTimeout(() => success.value = false, 3000)
    }

    return {
      reviews, nameInput, textInput, rating, hovered,
      avgRating, avgStars, canSubmit, displayedStars,
      success, starsHtml, formatDate,
      setHover, clearHover, setRating, submit
    }
  },
  template: `
    <div class="reviews-section" id="reviews">
      <details class="reviews-details" id="reviewsDetails">
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
          <!-- List -->
          <div>
            <div class="reviews-list">
              <div v-if="!reviews.length" class="reviews-empty">
                Отзывов пока нет. Будьте первым!
              </div>
              <div
                v-for="r in [...reviews].reverse()"
                :key="r.id"
                class="review-card"
              >
                <div class="review-header">
                  <div class="review-author">{{ r.name }}</div>
                  <div class="review-meta">
                    <div class="review-stars">{{ starsHtml(r.rating) }}</div>
                    <div class="review-date">{{ formatDate(r.date) }}</div>
                  </div>
                </div>
                <div class="review-text">{{ r.text }}</div>
              </div>
            </div>
          </div>

          <!-- Form -->
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
                maxlength="1000"
              ></textarea>
            </div>

            <button class="rv-submit" :disabled="!canSubmit" @click="submit">
              Отправить отзыв
            </button>

            <div class="rv-success" v-if="success">✓ Отзыв добавлен, спасибо!</div>

            <div class="rv-notice">
              Отзывы сохраняются в этом браузере. Редактирование после отправки недоступно.
            </div>
          </div>
        </div>
      </details>
    </div>
  `
}
