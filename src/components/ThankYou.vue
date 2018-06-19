<template>
    <div class="container thankyou">
        <parallax-container>
          <parallax-element :parallaxStrength="-10" :type="'depth'">
            <transition name="slide-fade" mode="out-in" appear>
              <h1 class="center">Thank You!</h1>
            </transition>
          </parallax-element>
        </parallax-container>
        <router-link to="/" key="form" exact>
            <button class="button-primary">Home</button>
          </router-link>
  </div>
</template>
<script>
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'
export default {
  name: 'ThankYou',
  data () {
    return {
    }
  },
  components: {
    ParallaxElement,
    ParallaxContainer
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .thankyou {
    height:82vh;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    padding-bottom: 0px;
    padding: 0 10px;
    border-radius: 4px;
  }
  .slide-fade-enter-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }

  .slide-fade-enter,
  .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */

  {
    opacity: 0;
  }

  .center {
    text-align: center;
  }

</style>
