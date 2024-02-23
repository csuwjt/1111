<script setup>
// import {ref} from 'vue'
// import {useRoute} from 'vue-router'
//  import { findTopCategoryAPI } from '@/apis/category'
//   const categoryData = ref({})
//   const route = useRoute()
//   const getCategory = async (id) => {
//     // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
//     const res = await findTopCategoryAPI(id)
//     categoryData.value = res.result
//   }
//   getCategory(route.params.id)
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
  <div class="top-category">
    <div class="container m-top-20">
      <!-- 面包屑 -->
      <div class="bread-container">
        <el-breadcrumb separator=">">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>品质文房
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="item in bannerList" :key="item.id">
        <img :src="item.picture" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }

  .sub-list {
    margin-top: 20px;
    background-color: #fff;

    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;

      li {
        width: 168px;
        height: 160px;


        a {
          text-align: center;
          display: block;
          font-size: 16px;

          img {
            width: 100px;
            height: 100px;
          }

          p {
            line-height: 40px;
          }

          &:hover {
            color: #274cba;
          }
        }
      }
    }
  }

  .ref-goods {
    background-color: #fff;
    margin-top: 20px;
    position: relative;

    .head {
      .xtx-more {
        position: absolute;
        top: 20px;
        right: 20px;
      }

      .tag {
        text-align: center;
        color: #999;
        font-size: 20px;
        position: relative;
        top: -20px;
      }
    }

    .body {
      display: flex;
      justify-content: space-around;
      padding: 0 40px 30px;
    }
  }

  .bread-container {
    padding: 25px 0;
  }
}
.banner {
  width: 1240px;
  height: 500px;
  margin:0 auto;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>