<template>
  <div class="cover">
  <div class="container vision">
    <div class="row i">
      <h2 class="c">Our Vision</h2>
      <h5>Our vision is to be the best in the business to provide high quality service towards our customers.
            </h5>
    </div>
    <parallax-container>
      <parallax-element :parallaxStrength="-10" :type="'depth'">
        <div class="row t">
          <div class="u-full-width x"></div>
          <div class="u-full-width head">
            <h3 class="center">Caribbean Auto Parts Hunter aims for the future to be the leading auto part searcher for the Caribbean area.</h3>
          </div>
        </div>
      </parallax-element>
    </parallax-container>
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
  name: 'Vision',
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
  .vision {
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 0 10px;
    border-radius: 4px;
  }

  .cover {
    background-image: url("../assets/images/engine.jpeg");
    background-size: cover;
    background-attachment: fixed;
  }
  .t {
    height: 70vh;
    position: relative;
  }
  .i{
    padding-top:10px;
  }
  .head {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .x {
    height: inherit;
    z-index: -1;
    position: absolute;
    background: url("../assets/images/24-7.png") no-repeat center;
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

  .c {
    text-decoration: underline;
    -webkit-text-decoration-color: #F7941D;
    /* Safari */
    text-decoration-color: #F7941D;
  }

  .center {
    text-align: center;
  }

  .u-full-width {
    border-radius: 4px;
  }

  .row {
    margin-top: 30px;
    border-radius: 4px;
  }

</style>
