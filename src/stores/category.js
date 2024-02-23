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
  [{id:'01',name:'生活日用',icon:'src/assets/images/icon1.png',
goods:[{picture:'src/assets/images/daily1.jpg',name:'中南口罩',desc:'已售3719个',price:'2.00',id:'01'},
{picture:'src/assets/images/daily2.jpg',name:'金属卡盒',desc:'已售202个',price:'18.00',id:'02'},
{picture:'src/assets/images/daily3.jpg',name:'帆布袋',desc:'已售710个',price:'38.00',id:'03'}
]},
  {id:'02',name:'品质文房',icon:'src/assets/images/icon2.png',
  goods:[{picture:'src/assets/images/stationery1.jpg',name:'纸质书签',desc:'已售534个',price:'5.00',id:'01'},
  {picture:'src/assets/images/stationery2.jpg',name:'鼠标垫',desc:'已售1655个',price:'9.90',id:'02'},
  {picture:'src/assets/images/stationery3.jpg',name:'金属书签',desc:'已售591个',price:'25.00',id:'03'}
  ]},
  {id:'03',name:'穿搭饰品',icon:'src/assets/images/icon3.png',
  goods:[{picture:'src/assets/images/clothes1.jpg',name:'纯棉T',desc:'已售339个',price:'78.00',id:'01'},
  {picture:'src/assets/images/clothes2.jpg',name:'中南戒指',desc:'已售205个',price:'18.80',id:'02'},
  {picture:'src/assets/images/clothes3.jpg',name:'卫衣',desc:'已售10个',price:'110.00',id:'03'}
  ]},
  {id:'04',name:'伴手礼赠',icon:'src/assets/images/icon4.png',
  goods:[{picture:'src/assets/images/gift1.jpg',name:'檀木笔',desc:'已售611个',price:'25.00',id:'01'},
  {picture:'src/assets/images/gift2.jpg',name:'八景茶',desc:'已售256个',price:'168.00',id:'02'},
  {picture:'src/assets/images/gift3.jpg',name:'耕读三件套',desc:'已售159个',price:'65.00',id:'03'}
  ]},
  {id:'05',name:'文创茶礼',icon:'src/assets/images/icon5.png',
  goods:[{picture:'src/assets/images/tea1.jpg',name:'杯茶礼盒',desc:'已售258个',price:'40.00',id:'01'},
  {picture:'src/assets/images/tea2.jpg',name:'书本茶',desc:'已售100个',price:'198.00',id:'02'},
  {picture:'src/assets/images/tea3.jpg',name:'湘益茯茶',desc:'已售20个',price:'298.00',id:'03'}
  ]},
  {id:'06',name:'定制服务',icon:'src/assets/images/icon6.png',
  goods:[{picture:'src/assets/images/custom1.jpg',name:'印章定制',desc:'已售147个',price:'50.00',id:'01'},
  {picture:'src/assets/images/custom2.jpg',name:'定制polo',desc:'已售357个',price:'999.00',id:'02'},
  {picture:'src/assets/images/custom3.png',name:'定制炭雕盘',desc:'已售0个',price:'999.00',id:'03'}
  ]}
])
return {
      categoryList
    }
})
