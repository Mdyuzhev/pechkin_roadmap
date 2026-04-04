import { createApp, onMounted } from 'vue'

import AppNav          from './components/AppNav.js'
import HeroSection     from './components/HeroSection.js'
import FeaturesSection from './components/FeaturesSection.js'
import CompareSection  from './components/CompareSection.js'
import DownloadsSection from './components/DownloadsSection.js'
import RoadmapSection  from './components/RoadmapSection.js'
import ReviewsSection  from './components/ReviewsSection.js'
import AppFooter       from './components/AppFooter.js'

const app = createApp({
  setup() {
    onMounted(() => {
      // Scroll fade-in animation
      const observer = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('vis')
            observer.unobserve(e.target)
          }
        })
      }, { threshold: 0.07 })

      document.querySelectorAll('.fi').forEach(el => observer.observe(el))
    })
  }
})

app.component('app-nav',           AppNav)
app.component('hero-section',      HeroSection)
app.component('features-section',  FeaturesSection)
app.component('compare-section',   CompareSection)
app.component('downloads-section', DownloadsSection)
app.component('roadmap-section',   RoadmapSection)
app.component('reviews-section',   ReviewsSection)
app.component('app-footer',        AppFooter)

app.mount('#app')
