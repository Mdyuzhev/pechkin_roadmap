import { featureGroups, explanations } from '../data.js'
import { ref } from 'vue'

export default {
  name: 'FeaturesSection',
  setup() {
    const tooltip = ref(null)   // { title, text, x, y }
    const tooltipVisible = ref(false)

    function showTooltip(event, key) {
      const exp = explanations[key]
      if (!exp) return
      tooltipVisible.value = true
      tooltip.value = { title: exp.title, text: exp.text }
    }

    function hideTooltip() {
      tooltipVisible.value = false
      tooltip.value = null
    }

    return { featureGroups, tooltip, tooltipVisible, showTooltip, hideTooltip }
  },
  template: `
    <section id="features">
      <div class="wrap">
        <div class="shead fi">
          <div class="slabel">Возможности</div>
          <div class="stitle">Всё что нужно<br/>QA-инженеру</div>
          <div class="ssub">От разбора OpenAPI-спецификации до готовых тестов с assertions — без ручного кодирования.</div>
        </div>

        <div v-for="group in featureGroups" :key="group.label" class="fgroup fi">
          <div class="fglabel">{{ group.label }}</div>
          <div class="fgrid">
            <div
              v-for="item in group.items"
              :key="item.name"
              class="fcard"
              :class="{ 'fcard-clickable': !!item.key }"
              @mouseenter="item.key && showTooltip($event, item.key)"
              @mouseleave="hideTooltip"
            >
              <div class="fname">{{ item.name }}</div>
              <div class="fdesc">{{ item.desc }}</div>
              <div v-if="item.key" class="fcard-hint">Подробнее ↗</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature tooltip popup -->
      <transition name="ftooltip">
        <div v-if="tooltipVisible && tooltip" class="ftooltip-overlay" @click="hideTooltip">
          <div class="ftooltip-box" @click.stop>
            <button class="popup-close" @click="hideTooltip">✕</button>
            <div class="popup-tag">Подробнее</div>
            <div class="popup-title">{{ tooltip.title }}</div>
            <div class="popup-text" v-html="tooltip.text"></div>
          </div>
        </div>
      </transition>
    </section>
  `
}
