<template>
  <div class="left-sidebar">
    <div id="left-sidebar">
      <div class="left-sidebar-wrapper">
        <RouterLink to="/" class="logo">
          <img src="../../assets/images/logo.png" alt="Logo">
        </RouterLink>
        <div class="tab-menu">
          <div class="author-profile-wrapper">
            <div class="img-wrapper">
              <img src="../../assets/images/banner-img-2.jpg" alt="Profile Image">
            </div>
            <div class="content-wrapper">
              <h3>Sefton</h3>
              <span>Pharmacist</span>
            </div>
          </div>

          <div class="navbar-menu">
            <ul class="menu">
              <li>
                <RouterLink to="/pharmacy"><i class="fa-solid fa-house"></i>Dashboard</RouterLink>
              </li>
              <li>
                <RouterLink to="/pharmacy/medical-history"><i class="fa-solid fa-user-nurse"></i>Prescription History</RouterLink>
              </li>
              <!-- <li>
                <RouterLink to="/pharmacy/patient-search"><i class="fas fa-search"></i>Patient Search</RouterLink>
              </li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay" @click="CloseSidebar"></div>
  </div>
</template>

<script>
export default {
  name: 'LeftSidebar',
  props: {
    msg: String
  },
  data() {
    return {
    }
  },
  methods: {
    CloseSidebar(){
      this.$emit("closeSidebar") // 👈 emit event
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";


</style>
