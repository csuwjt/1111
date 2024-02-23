<script setup>

// import HomePanel from './HomePanel.vue'
// import {findNewAPI} from '@/apis/home'
// import {ref,onMounted} from 'vue'

// const newList = ref ([])

// const getNewList = async()=>{
//     const res = await findNewAPI()
//     newList.value=res.result
// }
// onMounted( () => getNewList() )
import {ref} from 'vue'

const newList = ref([
    {id:'01',picture:'src/assets/images/HomeNew1.jpg',name:'龙年红包',price:'2.00'},
    {id:'02',picture:'src/assets/images/HomeNew2.jpg',name:'龙年台历',price:'15.00'},
    {id:'03',picture:'src/assets/images/HomeNew3.jpg',name:'长款羽绒服',price:'499.00'},
    {id:'04',picture:'src/assets/images/HomeNew4.jpg',name:'中南杯茶',price:'40.00'}
])

import HomePanel from './HomePanel.vue'
</script>
 
<template>
<HomePanel title="文创上新" sub-title="新鲜出炉 品质靠谱">
    
</HomePanel>

  <!-- 下面是插槽主体内容模版 -->
  <ul class="goods-list">
    <li v-for="item in newList" :key="item.id">
      <RouterLink to="/">
        <img v-img-lazy="item.picture" alt="" />
        <p class="name">{{ item.name }}</p>
        <p class="price">&yen;{{ item.price }}</p>
      </RouterLink>
    </li>
  </ul>
 
</template>


<style scoped lang='scss'>
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  width:1240px;
  margin: 0 auto;

  li {
    width: 306px;
    height: 406px;

    background: #aac0ff;
    transition: all .5s;

    &:hover {
      transform: translate3d(0, -3px, 0);
      box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
    }

    img {
      width: 306px;
      height: 306px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .price {
      color: #cf4444;
    }
  }
}
</style>