<template>
  <div class="home">
    <Header />

    <section class="banner">
      <carousel class="desktop-carousel" :items="1" carousel :autoplay="true" :nav="false" :autoplaySpeed="1000"
                :autoplayTimeout="4000"
                :responsive="{0:{items:1,nav:false, loop:true },600:{items:1,nav:true, loop:true }}">


        <div class="item" :style="{'background-image': 'url(' + require(`../assets/images/banner-img-1.png`) + ')'}">
          <div class="container">
            <div class="content-wrapper">
              <h1> Sefton Medical<br>
                <span> center</span></h1>
              <p class="p roboto">we treat , God heals</p>
              <a href="#" class="btn-style">Read More</a>
            </div>
          </div>
        </div>

        <div class="item" :style="{'background-image': 'url(' + require(`../assets/images/banner-img-4.jpg`) + ')'}">
          <div class="container">
            <div class="content-wrapper">
              <h1> Sefton Medical<br>
                <span> center</span></h1>
              <p class="p roboto">we treat , God heals</p>
              <a href="#" class="btn-style">Read More</a>
            </div>
          </div>
        </div>

      </carousel>
    </section>

    <section class="login-routes">
      <div class="container text-center">
        <div class="row">

          <div class="col-md-4">
            <div class="login-card">
              <div class="img-wrapper">
                <i class="fa-solid fa-user"></i>
              </div>
              <div class="content-wrapper">
                <h3>Admin Login</h3>
                <RouterLink to="admin-login">Click here</RouterLink>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="login-card">
              <div class="img-wrapper">
                <i class="fa-solid fa-user-doctor"></i>
              </div>
              <div class="content-wrapper">
                <h3>Medical Staff Login</h3>
                <RouterLink to="doctor-login">Click here</RouterLink>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="login-card">
              <div class="img-wrapper">
                <i class="fa-solid fa-user-nurse"></i>
              </div>
              <div class="content-wrapper">
                <h3>Receptionist Login</h3>
                <RouterLink to="receptionist-login">Click here</RouterLink>
              </div>
            </div>
          </div>


          <div class="col-md-4">
            <div class="login-card">
              <div class="img-wrapper">
                <i class="fas fa-flask"></i>
              </div>
              <div class="content-wrapper">
                <h3>Pharmacy Login</h3>
                <RouterLink to="pharmacy-login">Click here</RouterLink>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="login-card">
              <div class="img-wrapper">
                <i class="fa-solid fa-calculator"></i>
              </div>
              <div class="content-wrapper">
                <h3>Accountancy Login</h3>
                <RouterLink to="accountancy-login">Click here</RouterLink>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="login-card">
              <div class="img-wrapper">
                <i class="fa-solid fa-warehouse"></i>
              </div>
              <div class="content-wrapper">
                <h3>Inventory Login</h3>
                <RouterLink to="inventory-login">Login</RouterLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import carousel from 'vue-owl-carousel'
import {testRoute} from '../Store'

export default {
  name: 'HomeView',
  components: {
    Header,
    carousel
  },
  mounted(){
    this.CheckEndpointsTest()
  },
  methods:{
    CheckEndpointsTest(){
      testRoute().then((response) => console.log(response.data))
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
