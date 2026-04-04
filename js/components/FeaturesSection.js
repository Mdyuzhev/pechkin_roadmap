import { featureGroups } from '../data.js'

export default {
  name: 'FeaturesSection',
  setup() {
    return { featureGroups }
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
            <div v-for="item in group.items" :key="item.name" class="fcard">
              <div class="fname">{{ item.name }}</div>
              <div class="fdesc">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}
