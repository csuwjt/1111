<script setup>
import HomePanel from './HomePanel.vue'
import {reactive} from 'vue'
import GoodsItem from './GoodsItem.vue';

const goodsProduct = reactive(
  [{id:'01',name:'生活日用',icon:'src/assets/images/bigpicture1.jpg',
goods:[{picture:'src/assets/images/daily1.jpg',name:'中南口罩',desc:'已售3719个',price:'2.00',id:'01'},
{picture:'src/assets/images/daily2.jpg',name:'金属卡盒',desc:'已售202个',price:'18.00',id:'02'},
{picture:'src/assets/images/daily3.jpg',name:'帆布袋',desc:'已售710个',price:'38.00',id:'03'}
]},
  {id:'02',name:'品质文房',icon:'src/assets/images/bigpicture2.jpg',
  goods:[{picture:'src/assets/images/stationery1.jpg',name:'纸质书签',desc:'已售534个',price:'5.00',id:'01'},
  {picture:'src/assets/images/stationery2.jpg',name:'鼠标垫',desc:'已售1655个',price:'9.90',id:'02'},
  {picture:'src/assets/images/stationery3.jpg',name:'金属书签',desc:'已售591个',price:'25.00',id:'03'}
  ]},
  {id:'03',name:'穿搭饰品',icon:'src/assets/images/bigpicture3.jpg',
  goods:[{picture:'src/assets/images/clothes1.jpg',name:'纯棉T',desc:'已售339个',price:'78.00',id:'01'},
  {picture:'src/assets/images/clothes2.jpg',name:'中南戒指',desc:'已售205个',price:'18.80',id:'02'},
  {picture:'src/assets/images/clothes3.jpg',name:'卫衣',desc:'已售10个',price:'110.00',id:'03'}
  ]},
  {id:'04',name:'伴手礼赠',icon:'src/assets/images/bigpicture4.jpg',
  goods:[{picture:'src/assets/images/gift1.jpg',name:'檀木笔',desc:'已售611个',price:'25.00',id:'01'},
  {picture:'src/assets/images/gift2.jpg',name:'八景茶',desc:'已售256个',price:'168.00',id:'02'},
  {picture:'src/assets/images/gift3.jpg',name:'耕读三件套',desc:'已售159个',price:'65.00',id:'03'}
  ]},
  {id:'05',name:'文创茶礼',icon:'src/assets/images/bigpicture5.png',
  goods:[{picture:'src/assets/images/tea1.jpg',name:'杯茶礼盒',desc:'已售258个',price:'40.00',id:'01'},
  {picture:'src/assets/images/tea2.jpg',name:'书本茶',desc:'已售100个',price:'198.00',id:'02'},
  {picture:'src/assets/images/tea3.jpg',name:'湘益茯茶',desc:'已售20个',price:'298.00',id:'03'}
  ]},
  {id:'06',name:'定制服务',icon:'src/assets/images/bigpicture6.jpg',
  goods:[{picture:'src/assets/images/custom1.jpg',name:'印章定制',desc:'已售147个',price:'50.00',id:'01'},
  {picture:'src/assets/images/custom2.jpg',name:'定制polo',desc:'已售357个',price:'999.00',id:'02'},
  {picture:'src/assets/images/custom3.png',name:'定制炭雕盘',desc:'已售0个',price:'999.00',id:'03'}
  ]}
])
</script>

<template>
  <div class="home-product">
    <HomePanel :title="cate.name" v-for="cate in goodsProduct" :key="cate.id">
      <div class="box">
        <RouterLink class="cover" to="/">
          <img :src="cate.icon" />
        </RouterLink>
        <ul class="goods-list">
          <li v-for="goods in cate.goods" :key="goods.id">
            <GoodsItem :goods="goods"/>
          </li>
        </ul>
      </div>
    </HomePanel>
  </div>
</template>

<style scoped lang='scss'>
.home-product {
  background: #fff;
  margin-top: 20px;
  .sub {
    margin-bottom: 2px;

    a {
      padding: 2px 12px;
      font-size: 16px;
      border-radius: 4px;

      &:hover {
        background:#274cba;
        color: #fff;
      }

      &:last-child {
        margin-right: 80px;
      }
    }
  }

  .box {
    display: flex;

    .cover {
      width: 1240px;
      height: 610px;
      margin-right: 10px;
      position: relative;

      img {
        width: 100%;
        height: 100%;
      }

      .label {
        width: 188px;
        height: 66px;
        display: flex;
        font-size: 18px;
        color: #ffffff;
        line-height: 66px;
        font-weight: normal;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(0, -50%, 0);

        span {
          text-align: center;

          &:first-child {
            width: 76px;
            background: rgba(0, 0, 0, 0.9);
          }

          &:last-child {
            flex: 1;
            background: rgba(0, 0, 0, 0.7);
          }
        }
      }
    }

    .goods-list {
      width: 990px;
      display: flex;
      flex-wrap: wrap;

      li {
        width: 240px;
        height: 300px;
        margin-right: 10px;
        margin-bottom: 10px;

        &:nth-last-child(-n + 4) {
          margin-bottom: 0;
        }

        &:nth-child(4n) {
          margin-right: 0;
        }
      }
    }

    .goods-item {
      display: block;
      width: 220px;
      padding: 20px 30px;
      text-align: center;
      transition: all .5s;

      &:hover {
        transform: translate3d(0, -3px, 0);
        box-shadow: 0 3px 8px rgb(0 0 0 / 20%);
      }

      img {
        width: 160px;
        height: 160px;
      }

      p {
        padding-top: 10px;
      }

      .name {
        font-size: 16px;
      }

      .desc {
        color: #999;
        height: 29px;
      }

      .price {
        color:#cf4444;
        font-size: 20px;
      }
    }
  }
}
</style>