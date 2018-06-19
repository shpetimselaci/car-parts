<template>
  <div class="cover">
    <div class="container home">
      <div class="row">
        <div class="u-full-width u">
          <div class="c">
            <h2 class="title">Find the parts on our shop!</h2>
            <h5>Call us immidiately or fill the contact form with the part(s) you need. We will reach you rightaway!</h5>
          </div>
          <div class="y">
            <img src="../assets/images/gears.svg">
          </div>
        </div>
      </div>
      <FormC></FormC>
    </div>
  </div>
</template>
<script>
import FormC from '../components/FormC.vue'
export default {
  name: 'Home',
  components: {
    FormC
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    margin-bottom: 20px;
    background-color: rgba(255, 255, 255, 0.85);
    padding: 0 10px;
    border-radius: 4px;
  }
  .cover {
    background-image: url("../assets/images/car6.jpeg");
    background-size: cover;
    background-attachment: fixed;
  }
  .m {
    text-align: center;
  }
  .intro {
    margin: 5%;
    border-radius: 50%;
    background-color: white;
  }
  .s {
    margin-top: 20px;
  }
  .title {
    margin-top: 20px;
  }
  .row {
    margin-top: 30px;
  }
  .column,
  .columns {
    border-radius: 4px;
    text-align: center;
  }
  .spa {
    padding: 0 10px;
    background-color: #F7941D;
    color: white;
  }
  .u {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .u {
    flex: 2 2 300px;
  }
  .y {
    flex: 1 1 120px;
  }
  .d {
    text-align: left;
  }
</style>
