<script setup>
// import {getBannerAPI} from '@/apis/home'
// import {ref,onMounted} from 'vue'

// const bannerList=ref([])

// const getBanner = async ()=>{
//     const res = await getBannerAPI()
// bannerList.value = res .result

// }
// onMounted {()=>getBanner()
// }
import {ref} from 'vue'

const bannerList=ref([
    {id:'01',picture:'src/assets/images/banner1.jpg'},
    {id:'02',picture:'src/assets/images/banner2.jpg'},
    {id:'03',picture:'src/assets/images/banner3.jpg'},
    {id:'04',picture:'src/assets/images/banner4.png'},
    {id:'05',picture:'src/assets/images/banner5.png'}
]) 
</script>



<template>
  <div class="home-banner">
    <el-carousel height="480px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.picture" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 990px;
  height: 480px;
  position: absolute;
  left:250px;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 480px;
  }
}
</style>