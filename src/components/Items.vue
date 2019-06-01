<template>
  <section class="items">
    <div class="item-content" v-if="items.length" key="item">
      <router-link v-for="{itemId, title, image, categorys, text} in items" :key="itemId" :to="`/item/${itemId}`" class="item">
        <div class="item-image"><img :src="`./static/image/${image}`" alt=""></div>
        <div class="item-detail">
          <div class="item-detail-category">
            <span class="item-detail-category-inner" v-for="{id, name} in categorys" :key="id">{{name}}</span>
          </div>
          <h2 class="item-detail-title">{{title}}</h2>
          <div class="item-detail-content">{{text}}</div>
        </div>
      </router-link><!-- item -->
    </div>
    <div class="no-item" v-else-if="noItem">{{noItem}}</div>
    <div class="load" v-else key="loading">Loading...</div>
  </section>
</template>

<script>
import data from '../api/data.js'
export default {
  name: 'Items',
  props: {
    id: Number,
    searchWord: String
  },
  data() {
    return {
      items: [],
      noItem: null // キーワード検索の結果がなかった時の文字列
    }
  },
  created() {
    // カテゴリーでの絞り込み
    if(this.id) return this.items = data.findBycategory(this.id);

    // キーワード検索
    if(this.searchWord){
      const result = data.findByKeyword(this.searchWord.toUpperCase());
      if(!result.length) return this.noItem = this.searchWord + ' の検索結果はありませんでした。';
      return this.items = result;
    }

    // 全データ取得
    this.items = data.fetch();
  },
  watch: {
    id(val) { // カテゴリーでの絞り込み
      this.noItem = '';
      if(!val) return;
      this.items = [];
      setTimeout(() => {
        this.items = data.findBycategory(val);
      }, 1000);
    },
    searchWord(val) { // キーワード検索
      if(!val) return;
      this.noItem = '';
      this.items = [];
      setTimeout(() => {
        const result = data.findByKeyword(val.toUpperCase()); // 大文字小文字の区別をせずに検索

        // 検索結果がなかった場合
        if(!result.length) return this.noItem = val + ' の検索結果はありませんでした。';

        this.items = result;
      }, 1000);
    },
    '$route' (el) {
      if(el.path === '/all') {
        this.noItem = '';
        this.items = [];
        setTimeout(() => {
          this.items = data.fetch();
        }, 1000);
      }
    }
  }
}
</script>

<style lang="scss">
@import "../assets/scss/__common.scss";

.item{
    width: 100%;
    padding: 15px;
    margin-bottom: 5px;
    display: flex;
    background: #ffffff;
    color: #000000;

    &-content{
      animation: fadeIn 1s;
    }

    @include mq(s) {
      padding: 8px;
    }

    &-image{
        font-size: 0;
        width: 30%;
        min-width: 200px;
        margin-right: 5%;
        overflow: hidden;
        background: #fff;
        img{
            width: 100%;
            transition: all .5s;
        }

        @include mq(md) {
          min-width: 170px;
        }
        @include mq(sm) {
          min-width: 150px;
        }
        @include mq(s) {
          min-width: 120px;
          width: 25%;
          margin-right: 2%;
        }
    }

    &-detail{
        width: 65%;
        padding: 15px 0;

        @include mq(s) {
          padding: 10px;
          width: 73%;
        }

        &-category{
            margin-bottom: 10px;

            &-inner{
                @include category_inner;

                @include mq(sm) {
                  font-size: 12px;
                }
            }

            @include mq(lg) {
              margin-bottom: 7px;
            }
            @include mq(sm) {
              margin-bottom: 5px;
            }
        }

        &-title{
            transition: all .3s;
            font-size: 1.4rem;
            margin-bottom: 7px;

            @include mq(lg) {
              font-size: 1.2rem;
            }
            @include mq(sm) {
              font-size: 14px;
              margin-bottom: 5px;
            }
        }

        &-content{
            color: #aaaaaa;
            font-size: .9rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            line-height: 1.6;
            overflow: hidden;
            margin-bottom: 7px;

            @include mq(lg) {
              font-size: .85rem;
            }
            @include mq(sm) {
              margin-bottom: 5px;
            }
            @include mq(s) {
              font-size: 11px;
              margin-bottom: 2px;
            }
        }

        &-date{
            font-size: .8rem;
            color: #666666;

            @include mq(sm) {
              font-size: 10px;
            }
        }
    }

    &:hover{
        .item-image img{
            transform: scale(1.07);
        }

        .item-detail-title{
            color: #4936AB;
        }
    }
}

.load{
  @include load;
}
.no-item{
  @extend .load;
  font-size: 15px;
  animation: none;
}
</style>
