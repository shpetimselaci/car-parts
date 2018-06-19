<template>
    <div class="navbar">
      <div class="container ns">
        <ul class="row nv">
          <li class="four columns" id="logo">
            <img class="lg" src="../assets/images/logo.svg">
            <img class="t" src="../assets/images/text.svg">
            <button @click="showList=!showList"><img src="../assets/images/menu.svg"></button>
          </li>
          <transition-group name="fade" class="even" mode="out-in">
          <router-link v-if="showList" to="/" class="one column n" active-class="active" tag="li" key="home" exact><a>Home</a></router-link>
          <router-link v-if="showList" to="/about" class="one column n" active-class="active" tag="li" key="about" exact><a>About</a></router-link>
          <router-link v-if="showList" to="/service" class="one column n" active-class="active" tag="li" key="Service" exact><a>Service</a></router-link>
          <router-link v-if="showList" to="/mision" class="one column n" active-class="active" tag="li" key="Mision" exact><a>Mision</a></router-link>
          <router-link v-if="showList" to="/vision" class="one column n" active-class="active" tag="li" key="Vision" exact><a>Vision</a></router-link>
          </transition-group>
        </ul>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      windowWidth: 0,
      showList: false
    }
  },
  methods: {
    getWindowWidth (event) {
      this.windowWidth = document.documentElement.clientWidth
      if (this.windowWidth > 740) {
        this.showList = true
      } else {
        this.showList = false
      }
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.getWindowWidth)
      this.getWindowWidth()
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button{
  display:none;
  padding:0;
  margin-bottom: 0px;
  border:none;
}
.even{
  display:flex;
  justify-content: space-evenly;
}
button>img{
  height:21px;
}
 .navbar{
  box-shadow: 0 1px 6px rgba(57,73,76,0.35);
  width: 100%;
  z-index: 1;
  border-top: 1px solid #eee;
}
#logo{
  margin-bottom:0px;
  display: flex;
  align-items: flex-end;
}
.n{
  margin-bottom:0px;
  text-transform: uppercase;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .2rem;
  margin-right: 35px;
  text-decoration: none;
  line-height: 5.5rem;
  color: #222;
}
a{
  text-decoration:none;
  color:inherit;
}
.nv{
  list-style:none;
  margin:0;
}
.active{
  color:#f7941d;
}
.n>a:hover{
  color:#F7941D;
  text-decoration:underline;
}
.t{
  height:35px;
  align-self:center;
}
.lg{
  height:50px;
}
@media (max-width: 750px) {
  .even{
    display:block;
  }
  .navbar{
    position: fixed;
    z-index: 7;
    background-color: #f8f8f8;
  }
  .n{
    font-size:10px;
    margin-right: 22px;
  }
  button>img{
    height:17px;
  }
  #logo{
    width:100%;
    height:42px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
  .lg{
    height:37px;
  }
  .t{
    height: 31px;
  }
  button{
    display:flex;
    align-content: center;
    justify-content: center;
  }
}
@media (max-width:550px) {
  .n{
    border-bottom: 1px solid #eee;
  }
}
</style>
