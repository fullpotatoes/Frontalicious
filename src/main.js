import './assets/main.css'

import { createApp } from 'vue'
import Appdalicious from './Appdalicious.vue'
import router from './router'

const app = createApp(Appdalicious)
app.use(router)
app.mount('#app')