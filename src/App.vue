<template>
  <div id="app">
    <Header></Header>
    <transition name="fade" mode="out-in" appear>
      <router-view :key="$route.fullPath" class="view"></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>
<style>

@media (max-width:550px) {
  .view{
    margin-top: 8px;
  }
  }
#app {
  display:flex;
  flex-direction:column;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
