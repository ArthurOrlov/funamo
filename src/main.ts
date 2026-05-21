import './assets/normalize.css'
import './assets/global.css'
import './assets/header.css'

import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const app = createApp(App)

app.mount('#app')

AOS.init({
    duration: 800,
    offset: 0,
})