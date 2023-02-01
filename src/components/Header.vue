<template>
  <header id="header">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-6 align-self-center">
          <a href="#" class="logo">
            <img src="../assets/images/logo.png" alt="">
          </a>
        </div>
        <div class="col-md-9 col-6 align-self-center">
          <div class="hamburger-menu" @click="isMenuOpen = true">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div class="navbar-menu" :class="{ 'active' : isMenuOpen }">
            <div class="close-menu" @click="isMenuOpen = false">
              <i class="fa-solid fa-x"></i>
            </div>
            <ul class="menu">
              <li><a href="#">Home</a></li>
              <!-- <li><a href="#">Contact</a></li> -->
              <li><a href="#">Help</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>



export default {
  name: 'HeaderComponent',
  props: {
    msg: String
  },
  components: {
  },
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";

#header{
  padding: 15px 0 15px;
  .hamburger-menu{
    display: none;
    text-align: right;
    @media screen and (max-width: $screen-xs) {
      display: block;
    }
    i{
      font-size: 28px;
      color: $primary02;
    }
  }

  a.logo{
    img{
      max-width: 70px;
      @media screen and (max-width: $screen-xs) {
        max-width: 70px;
      }
    }
  }
  .navbar-menu{
    @media screen and (max-width: $screen-xs) {
      position: fixed;
      top: 0;
      right: 0;
      width: 100%;
      height: 100vh;
      background: white;
      z-index: 2;
      display: none;
      &.active{
        display: block;
      }
    }
    .close-menu{
      display: none;
      @media screen and (max-width: $screen-xs) {
        text-align: center;
        padding: 40px 0 0;
        display: block;
      }
      i{
        font-size: 28px;
        color: $primary02;
      }
    }
    ul.menu{
      text-align: right;
      @media screen and (max-width: $screen-xs) {
        text-align: center;
        padding-top: 60px;
      }
      li{
        @media screen and (max-width: $screen-xs) {
          display: block;
        }
        &:not(:last-of-type){
          margin: 0 40px 0 0;
          @media screen and (max-width: $screen-xs) {
            margin: 0 0 40px;
          }
        }
      }
    }
  }
}


</style>
