import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
console.log(1111)
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
console.log('测试revert第一次')
