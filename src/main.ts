import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
// 引入element-plus
import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import router from '@/router/index'

// 创建实例
const app = createApp(App)
// 全局注册组件（也可以使用局部注册）
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router)
app.mount('#app')

// const setupAll = async () => {
//   const app = createApp(App)
//   setupStore(app)
//   setupElementPlus(app)
//   setupRouter(app)
//   setupPermission(app)
//   app.mount('#app')
// }
// setupAll()
