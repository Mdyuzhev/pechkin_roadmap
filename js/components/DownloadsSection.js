import { downloads } from '../data.js'

export default {
  name: 'DownloadsSection',
  setup() {
    return { downloads }
  },
  template: `
    <section id="downloads">
      <div class="wrap">
        <div class="shead fi">
          <div class="slabel">Скачать</div>
          <div class="stitle">Установить Pe4King</div>
          <div class="ssub">Выберите платформу. Все версии бесплатны и работают без интернета.</div>
        </div>
        <div class="dl-grid fi">
          <div v-for="item in downloads" :key="item.name" class="dl-card">
            <div class="dl-card-header">
              <span class="dl-icon">{{ item.icon }}</span>
              <div>
                <div class="dl-name">{{ item.name }}</div>
                <div class="dl-version">v{{ item.version }}</div>
              </div>
            </div>
            <div class="dl-platforms">
              <span
                v-for="p in item.platforms"
                :key="p.label"
                :class="['dl-platform', p.ok ? 'ok' : 'soon']"
              >{{ p.ok ? '✓' : '⏳' }} {{ p.label }}</span>
            </div>
            <div class="dl-buttons">
              <a
                v-for="btn in item.buttons"
                :key="btn.label"
                :href="btn.href"
                :class="['dl-btn', { 'dl-btn-primary': btn.primary }]"
                :download="btn.sub"
                target="_blank"
                rel="noopener"
              >
                <span>{{ btn.label }}</span>
                <span>{{ btn.sub }}</span>
              </a>
            </div>
            <div class="dl-note">{{ item.note }}</div>
          </div>
        </div>
      </div>
    </section>
  `
}
