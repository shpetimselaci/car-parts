<template>
  <div class="cover">
    <div class="container about">
      <parallax-container>
        <parallax-element :parallaxStrength="-10" :type="'depth'">
          <div class="row t">
            <div class="u-full-width x"></div>
            <div class="u-full-width head">
              <h1 class="z">Caribbean Auto Parts Hunter </h1>
              <h5>is a new online auto parts store in the Caribbean area.</h5>
            </div>
          </div>
        </parallax-element>
      </parallax-container>
      <div class="row b">
        <div class="two-thirds column s">
          <h2 class="l">About us</h2>
          <h6 class="text"> Our goal is to offer our customers with a wide area search of high quality genuine and aftermarket auto parts for vehicle makes such as (Toyota, Nissan, Honda, Mitsubishi, Chevrolet, Kia, BMW, Isuzu, Ford, Hyundai, Suzuki, Mercedes and much more!).</h6>
        </div>
        <div class="one-third column a">
          <h5>Want to order a part?<br>Contact us!</h5>
          <router-link to="/" key="form" exact>
            <button class="button-primary">Email us!</button>
          </router-link>
        </div>
      </div>
      <div class="u-full-width">
        <h3 class="f">It's what we do that makes us great!</h3>
        <div class="n">
            <h6 class="text"> Caribbean Auto parts hunter is committed to provide you as our customer a good service and communication to satisfy your needs.</h6>
        <div class="im"><img src="../assets/images/check.svg"></div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'
export default {
  name: 'About',
  data () {
    return {
    }
  },
  components: {
    ParallaxContainer,
    ParallaxElement
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .about {
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 0 10px;
    border-radius: 4px;
  }
  .cover {
    background: url("../assets/images/engine1.jpeg") no-repeat fixed center;
  }
  .a {
    align-self: center;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    text-align:right;
  }
  .f{
    margin-bottom: 0;
  }
  .l{
    text-align:left;
  }
  .t {
    padding-top:10px;
    height: 70vh;
    position: relative;
  }
  .n {
    display: flex;
    align-items: center;
  }
  .im {
    flex: 0 0 10%;
    margin-left: 20px;
  }
  .q {
    padding: 30px 0;
    background-color: #6689A1;
    margin-bottom: 40px;
  }
  .head {
    outline: 1px solid transparent;
    border-radius: 4px;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
  }
  .b {
    display: flex;
  }
  .x {
    height: inherit;
    z-index: -1;
    position: absolute;
    background: url("../assets/images/pic.jpeg") no-repeat fixed center;
    border-radius: 4px;
  }
  .row {
    margin-top: 30px;
  }
  .columns {
    text-align: center;
  }
  .intro {
    margin: 3%;
    border-radius: 50%;
    background-color: white;
  }
  .text {
    text-align: justify;
  }

  @media (max-width:550px) {
    .b {
      display: block;
    }
    .a{
      align-items: flex-start;
      text-align:left;
    }
  }

</style>
