<template>
<div class="cover">
  <div class="container service">
    <parallax-container>
      <parallax-element :parallaxStrength="-10" :type="'depth'">
        <div class="row t">
          <div class="u-full-width x"></div>
          <div class="u-full-width head">
            <h1>Caribbean Auto Parts Hunter</h1>
            <h5>All you need is to fill out the form and you'll get the part you need.</h5>
          </div>
        </div>
      </parallax-element>
    </parallax-container>
    <div class="row z">
      <div class="u-full-width">
        <h2>Our Service</h2>
        <h5 class="text">Upon your request for a car part, we will start searching to find the right genuine/ aftermarket auto part for you at an affordable price.</h5>
        <h5 class="text">And most importantly you will get the part(s) rightaway!</h5>
      </div>
    </div>
    <parallax-container>
      <div class="u-full-width v">
        <div class="ico">
          <div>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/steering.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/winshield.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/suspension.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/exhaust.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/gear.svg" />
            </parallax-element>
          </div>
          <div>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/break.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/speed.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/abs.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/frame.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/clima.svg" />
            </parallax-element>
          </div>
          <div>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/fmirror.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/smirror.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/piston.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/radio.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/seat.svg" />
            </parallax-element>
          </div>
          <div>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/motor.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/accumulator.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/fuel.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/pedals.svg" />
            </parallax-element>
            <parallax-element :parallaxStrength="10" :type="'translation'">
              <img src="../assets/images/door.svg" />
            </parallax-element>
          </div>
        </div>
      </div>
    </parallax-container>
    <div class="row">
      <div class="u-full-width u">
        <div class="j">
          <h2>Navigate to the form</h2>
          <h6 class="text">
            You would need to fill in a form and provide us with some information about the part before we can continue with searching for the right genuine/aftermarket auto part. Please refer to the fill in form for more details.
        </h6>
      </div>
      <div class="y">
        <img src="../assets/images/find.svg">
      </div>
      </div>
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
  name: 'Service',
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
  .service {
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 0 10px;
    border-radius: 4px;
  }

  .cover {
    background-image: url("../assets/images/car7.jpeg");
    background-size: cover;
    background-attachment: fixed;
  }
  .t {
    padding-top:10px;
    box-sizing: border-box;
    height: 70vh;
    position: relative;
  }

  .v {
    flex-direction: column;
    justify-content: space-between
  }

  .v>div {
    flex: 1 1;
  }
  .ico {
    flex-direction: column;
    background-color: #EBEBEB;
    padding: 3% 3%;
    border-radius: 4px;
  }

  .ico>div {
    display: flex;
    flex: 1 1;
    justify-content: space-between;
  }

  .ico>div>div {
    flex: 0 1 50px;
    outline: 1px solid transparent;
  }

  .parallax-element>img {
    position: relative;
  }

  .text {
    text-align: justify;
  }

  .head {
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: white;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    outline: 1px solid transparent;
  }

  .x {
    height: inherit;
    z-index: -1;
    border-radius: 4px;
    position: absolute;
    background: url("../assets/images/picture.jpeg")no-repeat center;
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

  .sm {
    border-bottom: 1px solid #333;
  }

  .sm>a {
    text-decoration: none;
  }

  .s {
    border-radius: 4px;
    text-align: left;
  }

  .e {
    height: 30vh;
    background: url("../assets/images/apic.jpeg") repeat fixed center;
    margin-bottom: 50px;
  }

  .row {
    margin-top: 30px;
    border-radius: 4px;
  }
  .u,
  .z,
  .v,
  .ico {
    display: flex;
    justify-content: space-between;
  }

  .u,
  .z {
    align-items: flex-end;
  }
  .j{
    flex: 0.85 1;
  }
  .y{
    flex: 0 1 100px;
  }
  .w {
    text-align: right;
  }

  .w>ul>li {
    list-style: none;
  }

  @media (max-width: 550px) {
    .ico>div>span {
      flex: 0 1 40px;
    }
    .u{
      flex-direction:column;
    }
    .y{
      width:30%;
    }
  }

  @media (max-width: 750px) {
    .v {
      display: block;
    }
  }

</style>
