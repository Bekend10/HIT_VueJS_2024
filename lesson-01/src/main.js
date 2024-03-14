import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {sum} from './abc'

createApp(App).mount('#app')

sum();