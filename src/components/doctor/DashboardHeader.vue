<template>
  <header id="dashboard-header">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-6 col-6 align-self-center">
          <div class="hamburger-menu" @click="openSidebar">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div class="form">
            <div class="form-group">
              <input type="text" class="form-control" placeholder="Search...">
              <label for="searchForm"><i class="fas fa-search"></i></label>
              <input type="submit" id="searchForm">
            </div>
          </div>
        </div>
        <div class="col-xl-6 col-6 align-self-center">
          <ul class="dashboard-info">
            <li>
              <div class="notification-wrapper" @click="notificationPopup()">
                <span class="counter">6</span>
                <i class="fa-solid fa-bell"></i>
              </div>
              <ul class="dropdown-menu-popup notification-info-menu" :class="{'active' : isNotificationPopup}">
                <li>
                  <a href="#">
                    <div class="notification-card">
                      <div class="img-wrapper">
                        <img src="../../assets/images/doctor-profile-img.jpg" alt="Doctor">
                      </div>
                      <div class="content-wrapper">
                        <strong>Alexander</strong>
                        <p>There are many variations of passages</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="notification-card">
                      <div class="img-wrapper">
                        <img src="../../assets/images/doctor-img-1.jpg" alt="Doctor">
                      </div>
                      <div class="content-wrapper">
                        <strong>Alexander</strong>
                        <p>There are many variations of passages</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="notification-card">
                      <div class="img-wrapper">
                        <img src="../../assets/images/doctor-img-1.jpg" alt="Doctor">
                      </div>
                      <div class="content-wrapper">
                        <strong>Alexander</strong>
                        <p>There are many variations of passages</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="notification-card">
                      <div class="img-wrapper">
                        <img src="../../assets/images/doctor-img-1.jpg" alt="Doctor">
                      </div>
                      <div class="content-wrapper">
                        <strong>Alexander</strong>
                        <p>There are many variations of passages</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="notification-card">
                      <div class="img-wrapper">
                        <img src="../../assets/images/doctor-img-1.jpg" alt="Doctor">
                      </div>
                      <div class="content-wrapper">
                        <strong>Alexander</strong>
                        <p>There are many variations of passages</p>
                      </div>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div class="notification-card">
                      <div class="img-wrapper">
                        <img src="../../assets/images/doctor-img-1.jpg" alt="Doctor">
                      </div>
                      <div class="content-wrapper">
                        <strong>Alexander</strong>
                        <p>There are many variations of passages</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="notification-card">
                      <div class="img-wrapper">
                        <img src="../../assets/images/doctor-img-1.jpg" alt="Doctor">
                      </div>
                      <div class="content-wrapper">
                        <strong>Alexander</strong>
                        <p>There are many variations of passages</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="notification-card">
                      <div class="img-wrapper">
                        <img src="../../assets/images/doctor-img-1.jpg" alt="Doctor">
                      </div>
                      <div class="content-wrapper">
                        <strong>Alexander</strong>
                        <p>There are many variations of passages</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="notification-card">
                      <div class="img-wrapper">
                        <img src="../../assets/images/doctor-img-1.jpg" alt="Doctor">
                      </div>
                      <div class="content-wrapper">
                        <strong>Alexander</strong>
                        <p>There are many variations of passages</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <div class="notification-card">
                      <div class="img-wrapper">
                        <img src="../../assets/images/doctor-img-1.jpg" alt="Doctor">
                      </div>
                      <div class="content-wrapper">
                        <strong>Alexander</strong>
                        <p>There are many variations of passages</p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <div class="author-info" @click="authorInfoPopup()">
                <div class="img-wrapper">
                  <img src="../../assets/images/doctor-profile-img.jpg" alt="Doctor">
                </div>
                <div class="content-wrapper">
                  <p class="white">Charlie</p>
                </div>
              </div>
              <ul class="dropdown-menu-popup author-info-menu" :class="{'active' : isAuthorInfoPopup}">
                <li><a href="#"><i class="fa-solid fa-user"></i> Profile</a></li>
                <li><a href="#"><i class="fa fa-key" aria-hidden="true"></i> Password</a></li>
                <li><a href="#"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DashboardHeader',
  props: {
    msg: String
  },
  data() {
    return {
      isAuthorInfoPopup: false,
      isNotificationPopup: false,
    }
  },
  methods: {
    authorInfoPopup(){
      this.isAuthorInfoPopup = !this.isAuthorInfoPopup;
      this.isNotificationPopup = false;
    },
    notificationPopup(){
      this.isNotificationPopup = !this.isNotificationPopup;
      this.isAuthorInfoPopup = false;
    },
    openSidebar(){
      this.$emit("toggle") // 👈 emit event
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";

</style>
