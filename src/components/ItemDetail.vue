<template>
<div class="abouts">
  <section v-if="item" class="about">
    <div class="about-image">
      <img :src="`./static/image/${item.demo}`" alt="">
    </div>
    <div class="about-category">
      <router-link :to="`/${id}`" class="about-category-inner" v-for="{id, name} in item.categorys" :key="id">{{name}}</router-link>
    </div>
    <a target="_blank" :href="item.url" class="about-title">{{item.title}}</a>
    <div class="about-content">{{item.text}}</div>
    <div class="about-date">{{item.date}}</div>
  </section>
  <div v-else class="load">Loading...</div>
  <router-link class="back" to="/">&lt; Top</router-link>
</div>
</template>

<script>
import data from '../api/data.js'
export default {
  name: 'ItemDetail',
  props: {
    itemId: Number
  },
  data() {
    return {
      item: null
    }
  },
  watch: {
    itemId(val){ // 投稿のidを取得する
      this.item = null;
      setTimeout(() => {
        this.item = data.find(val);
      }, 1000);
    }
  },
  created() {
    this.item = data.find(this.itemId);
  },
}
</script>

<style lang="scss">
@import '../assets/scss/__common.scss';

.about{
  background: #ffffff;
  padding: 15px;

  &-image{
    margin-bottom: 20px;

    img{
      width: 100%;
    }
  }

  &-title{
    font-size: 1.4rem;
    margin-bottom: 10px;
    font-weight: bold;
    display: inline-block;
    transition: all .3s;

    @include mq(s) {
      font-size: 1.2rem;
    }

    &:hover{
      color: #b851b8;
    }
  }

  &-url{
    display: inline-block;
    color: #aaaaaa;
    margin-bottom: 10px;
    font-size: 1.1rem;
    width: 100%;
    overflow-wrap: break-word;

    @include mq(s) {
      font-size: .9rem;
      margin-bottom: 7px;
    }

    &:hover{
      color: #b851b8;
    }
  }

  &-category{
    margin-bottom: 10px;

    &-inner{
      @include category_inner;
      transition: all .3s;

      &:hover{
        opacity: 0.7;
      }
    }
  }

  &-content{
    color: #504e4e;
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 10px;

    @include mq(s) {
      margin-bottom: 7px;
      font-size: 12px;
    }
  }

  &-date{
    margin-bottom: 10px;
    font-size: 12px;
    color: #666666;

    @include mq(s) {
      margin-bottom: 7px;
      font-size: 10px;
    }
  }
}

.router-link-active{
  opacity: .5;
}

.load{
  @include load;
}

@keyframes back {
  0%{
    transform: scaleX(.9);
  }
  50%{
    transform: scaleX(1);
  }
  100%{
    transform: scaleX(.9);
  }
}
.back{
  display: inline-block;
  color: #ffffff;
  font-size: 18px;
  margin: 20px;
  transform-origin: right;
  animation: back .5s infinite cubic-bezier(0.64,-0.05, 0.33, 0.76);
  opacity: 1;
}
</style>
