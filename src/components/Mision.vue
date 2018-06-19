<template>
  <div class="cover">
    <div class="container mision">
      <div class="row t">
        <h2 class="c">Our Mission</h2>
        <h5>Our mission is to provide the people of the Caribbean area with the possibility to explore abroad to get the best deals on quality auto parts.
            </h5>
      </div>
      <div class="row">
        <parallax-container>
          <parallax-element :parallaxStrength="-10" :type="'depth'">
            <transition name="slide-fade" mode="out-in" appear>
              <h1 class="center">Like our slogan says you ask we deliver!</h1>
            </transition>
            <div class="u-full-width b">
              <h2 class="center">
      Caribbean Auto Parts Hunter is here to help you with the searching for your auto part at an affordable price.
    </h2>
            </div>
          </parallax-element>
        </parallax-container>
      </div>
      <div class="row e">
        <div class="u-full-width g">
          <h1>Get the part you need!</h1>
          <router-link to="/" key="form" exact>
            <button class="button-primary">Navigate to the form</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'
export default {
  name: 'Mision',
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
  .mision {
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 0 10px;
    border-radius: 4px;
  }
  .t{
    padding-top:10px;
  }
  .cover {
    background: url("../assets/images/car.jpeg") no-repeat fixed center;
  }
  .center {
    text-align: center;
  }
  .b {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4%;
    border-radius: 4px;
    background-color: #FABE1D;
  }

  .mision {
    text-align: justify;
  }
  /* durations and timing functions.              */

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

  .e {
    height: 30vh;
    background: url("../assets/images/apic.jpeg") repeat fixed center;
    margin-bottom: 20px;
  }

  .g {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.68);
    color: white;
    text-align: center;
    height: inherit;
  }

  .u-full-width {
    border-radius: 4px;
  }

  .c {
    text-decoration: underline;
    -webkit-text-decoration-color: #F7941D;
    /* Safari */
    text-decoration-color: #F7941D;
  }
  .row {
    margin-top: 30px;
    border-radius: 4px;
  }

</style>
