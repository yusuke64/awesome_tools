<template>
  <div id="app">
    <header class="header">
      <h1 class="header-site-title"><router-link class="header-site-title-link" to="/all">AWESOME TOOLS</router-link></h1>
    </header>

    <main class="main">
      <div class="wrapper">
        <div class="item-area">
          <transition name="item">
            <router-view />
          </transition>
        </div>
        <Sidebar />
      </div><!-- wrapper -->
    </main>

    <footer class="footer">
      &copy; AWESOME TOOLS
    </footer>
  </div>
</template>

<script>
import Items from '@/components/Items'
import Sidebar from '@/components/Sidebar'

export default {
  name: 'App',
  components: {
    Items: Items,
    Sidebar: Sidebar
  }
}
</script>

<style lang="scss">
@import "./assets/scss/_common.scss";

#app{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.item-enter-active{
  transition: all .5s;
  transition-delay: .3s;
}
.item-enter{
  opacity: 0;
  transform: translateY(30px);
}
.item-leave-active{
  transition: .3s;
}
.item-leave-to{
  opacity: 0;
  transform: translateY(-30px);
}

.header{
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    text-align: center;
    font-family: $font-montaga;

    @include mq(sm) {
      height: 50px;
      line-height: 50px;
      font-size: 25px;
    }
    @include mq(s) {
      font-size: 23px;
    }

    &-site-title{

      &-link{
        // background: linear-gradient(to bottom, #fff 50%, #4b3bb4);
        color: white;
        background-clip: text;
        -webkit-background-clip: text;
        background-position: center;
        // animation: text_effect infinite 5s cubic-bezier(0, 0, 1, 1);
        background-size: 200%;

      }
      .router-link-active{
        opacity: 1;
      }
    }
}
@keyframes text_effect{
    0% {
        background-position: top;
    }
    50%{

    }
    100%{
        background-position: 0 -100px;
    }
}

.main{
    padding: 0 5vw;
    @include mq(s) {
      padding: 0 2vw;
    }

}
.wrapper{
    display: flex;
    justify-content: center;
    margin: 0 auto;
    max-width: 1200px;
    width: 100%;
    margin-top: 30px;

    @include mq(md) {
      margin-top: 15px;
      flex-direction: column;
    }
}
.item-area{
    width: 69%;
    margin-right: 1%;
    font-family: 'Monda', sans-serif;
    margin-bottom: 50px;

    @include mq(md) {
      width: 100%;
      margin-bottom: 30px;
    }
    @include mq(s) {
      margin-bottom: 10px;
    }
}
.footer{
  color: #ffffff;
  text-align: center;
  height: 50px;
  line-height: 50px;
  font-size: 14px;
  margin-top: auto;
}
</style>
