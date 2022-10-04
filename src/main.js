import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

createApp(App)
.use(Vuetify)
.use(bootstrap)
.use(router)
.mount('#app')
