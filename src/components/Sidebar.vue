<template>
  <section class="sidebar">
    <div class="panel">
      <div class="panel-search">
        <input required class="panel-search-input" v-model="searchWord" type="text" placeholder="キーワード検索">
        <!-- <button @click="search" class="panel-search-btn"><i class="fas fa-search"></i></button> -->
        <router-link class="panel-search-btn" :to="{name: 'ItemKeyword', query: {searchWord : searchWord}}"><i class="fas fa-search"></i></router-link>
      </div>
    </div>
    <div class="panel">
      <h2 class="panel-title">カテゴリ</h2>
      <div class="panel-category">
        <router-link to="/all" class="panel-category-inner">All</router-link>
        <router-link :to="`/${id}`" class="panel-category-inner" v-for="{id, name} in categorys" :key="id">{{name}}</router-link>
      </div>
    </div>
    <div class="panel">
      <h2 class="panel-title">最近の投稿</h2>
      <ul class="panel-recently">
        <li v-for="{itemId, title} in currentPost" :key="itemId"><router-link class="item-link" :to="`/item/${itemId}`">{{title}}</router-link></li>
      </ul>
    </div>
  </section>
</template>

<script>
import data from '../api/data.js'
export default {
  name: 'Sidebar',
  data() {
    return {
      categorys: [],
      searchWord: '',
      currentPost: [],
      itemId: '',
    }
  },
  created() {
    this.categorys = data.getcategory(); // カテゴリーのデータを取得
    this.currentPost = data.findCurrentPost(); // 最近の投稿を取得
  },
  methods: {
    search: function() {
      if(!this.searchWord) return;
    }
  },
  watch: {
    '$route' (el) {
      // キーワード検索でない場合input要素をからにする
      if(!el.query.searchWord) this.searchWord = '';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/__common.scss';
.sidebar{
    width: 30%;

    @include mq(md) {
      width: 100%;
    }
}

.panel{
    padding: 15px;
    background: #ffffff;
    margin-bottom: 5px;

    &-title{
        text-align: center;
        font-size: 18px;
        margin: 5px 0 20px;
    }

    &-search{
      @include search_panel;
    }

    &-category{
      font-size: 0;

        &-inner{
            @include category_inner;
            margin-bottom: 5px;
            transition: all .3s;

            &:hover{
                opacity: 0.7;
            }
        }
    }

    &-recently{
        padding: 0 15px;

        @include mq(s) {
          padding: 0 10px;
        }

        li{
            display: block;
            font-size: 15px;
            margin-bottom: 10px;

            @include mq(s) {
              font-size: 14px;
              margin-bottom: 8px;
            }

            .item-link{
              // display: inline-block;
                padding: 5px 0;
                transition: all .3s;

                &:hover{
                    opacity: 0.7;
                }
            }

            &::before{
                content: '';
                height: 10px;
                width: 10px;
                margin-right: 5px;
                border-radius: 50%;
                display: inline-block;
                background: #078FFE;

                @include mq(s) {
                  height: 7px;
                  width: 7px;
                }
            }
        }
    }
}

</style>
