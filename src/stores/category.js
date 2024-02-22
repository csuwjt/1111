// import { ref, computed } from 'vue'
import {reactive} from 'vue'
import { defineStore } from 'pinia'
// import {getCategoryAPI} from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
    // 获取导航数据的方法
//   const categoryList = ref ([])
// const getCategory = async ()=>{
//   const res = await getCategoryAPI()
//   categoryList.value = res.result
// }
    // return {
    //     categoryList,
    //     getCategory
    // }
    
const categoryList = reactive(
  [{id:'01',name:'首页'},
  {id:'02',name:'积分商城'},
  {id:'03',name:'领券中心'},
  {id:'04',name:'定制服务'},
  {id:'05',name:'积分抽奖'}
])
return {
      categoryList
    }
})
