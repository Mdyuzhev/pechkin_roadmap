import { compareRows, explanations } from '../data.js'
import { ref } from 'vue'

export default {
  name: 'CompareSection',
  setup() {
    const popup = ref(null)  // { title, text } | null

    function openPopup(key) {
      popup.value = explanations[key] || null
    }
    function closePopup() {
      popup.value = null
    }

    // Close on Esc
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape') closePopup()
    })

    return { compareRows, popup, openPopup, closePopup }
  },
  template: `
    <section id="compare">
      <div class="wrap">
        <div class="shead fi">
          <div class="slabel">Сравнение</div>
          <div class="stitle">Pe4King vs Postman</div>
          <div class="ssub">Pe4King генерирует тесты, Postman выполняет запросы. Вместе или вместо.</div>
          <div class="hint-click">↖ Нажмите на строку чтобы узнать подробнее</div>
        </div>
        <div class="twrap fi">
          <table>
            <thead>
              <tr><th>Функция</th><th>Pe4King</th><th>Postman</th></tr>
            </thead>
            <tbody>
              <tr
                v-for="row in compareRows"
                :key="row.key"
                :class="{ pe4: row.pe4only }"
                @click="openPopup(row.key)"
              >
                <td>{{ row.label }}</td>
                <td :class="{ pk: row.pe4only }">
                  <template v-if="row.pe4.type === 'yes'">
                    <span class="yes">✓</span>
                    <template v-if="row.pe4.text"> {{ row.pe4.text }}</template>
                  </template>
                  <template v-else-if="row.pe4.type === 'no'"><span class="no">✗</span></template>
                  <template v-else-if="row.pe4.type === 'soon'"><span class="soon">ROADMAP</span></template>
                  <template v-else-if="row.pe4.type === 'mixed'">
                    <span class="yes">✓</span> {{ row.pe4.yes }}
                    &nbsp;<span class="soon">ROADMAP</span> {{ row.pe4.soon }}
                  </template>
                </td>
                <td>
                  <template v-if="row.post.type === 'yes'">
                    <span class="yes">✓</span>
                    <template v-if="row.post.text"> {{ row.post.text }}</template>
                  </template>
                  <template v-else-if="row.post.type === 'no'"><span class="no">✗</span></template>
                  <template v-else-if="row.post.type === 'par'"><span class="par">{{ row.post.text }}</span></template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Popup overlay -->
      <div :class="['popup-overlay', { open: popup }]" @click.self="closePopup">
        <div class="popup" v-if="popup">
          <button class="popup-close" @click="closePopup">✕</button>
          <div class="popup-tag">Что это значит?</div>
          <div class="popup-title">{{ popup.title }}</div>
          <div class="popup-text" v-html="popup.text"></div>
          <div class="popup-hint">Нажмите Esc или кликните за пределами окна чтобы закрыть</div>
        </div>
      </div>
    </section>
  `
}
