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
