<script setup>


import {ref} from 'vue'

const stationeryList = ref([
    {id:'01',picture:'src/assets/images/HomeStationery1.jpg',name:'小贴纸',price:'2.00'},
    {id:'02',picture:'src/assets/images/HomeStationery2.jpg',name:'中南签字笔',price:'5.00'},
    {id:'03',picture:'src/assets/images/HomeStationery3.jpg',name:'车线本',price:'7.80'},
    {id:'04',picture:'src/assets/images/HomeStationery4.jpg',name:'校训书签',price:'9.90'}
])

import HomePanel from './HomePanel.vue'
</script>
 
<template>
<HomePanel title="品质文房" sub-title="stationary">
    
</HomePanel>

  <!-- 下面是插槽主体内容模版 -->
  <ul class="goods-list">
    <li v-for="item in stationeryList" :key="item.id">
      <RouterLink to="/">
        <img :src="item.picture" alt="" />
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

  li {
    width: 306px;
    height: 406px;

    background: #f0f9f4;
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
      color: $priceColor;
    }
  }
}
</style>