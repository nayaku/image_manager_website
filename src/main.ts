import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// collapse
import { ElCollapseTransition } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(router)
app.component(ElCollapseTransition.name, ElCollapseTransition)
app.mount('#app')
