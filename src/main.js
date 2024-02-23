
import { useIntersectionObserver } from '@vueuse/core'
import { createApp ,mounted} from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
//定义全局指令
app.directive('img-lazy',{
    mounted(el,binding) {
        //el:指令绑定的元素 img
        //binding:binding.value
        useIntersectionObserver(
            el,
            ([{ isIntersecting }]) => {
              if(isIntersecting) {
                el.src=binding.value
              }
            },
          )
    }
})
