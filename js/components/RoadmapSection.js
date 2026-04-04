import { roadmapItems } from '../data.js'

export default {
  name: 'RoadmapSection',
  setup() {
    return { roadmapItems }
  },
  template: `
    <section id="roadmap">
      <div class="wrap">
        <div class="shead fi">
          <div class="slabel">Roadmap</div>
          <div class="stitle">Что будет дальше</div>
          <div class="ssub">Направления развития Pe4King — от нагрузочного тестирования до корпоративных интеграций.</div>
        </div>
        <div>
          <div
            v-for="item in roadmapItems"
            :key="item.title"
            class="rmitem fi"
          >
            <div class="rmmeta">
              <div :class="['rmst', item.status]">{{ item.statusLabel }}</div>
              <div class="rmcat">{{ item.cat }}</div>
            </div>
            <div class="rmbody">
              <div class="rmtitle">{{ item.title }}</div>
              <div class="rmdesc">{{ item.desc }}</div>
              <div class="rmtags">
                <span v-for="tag in item.tags" :key="tag" class="rmtag">{{ tag }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
