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
              <img src="../../assets/images/doctor-profile-img.jpg" alt="Profile Image">
            </div>
            <div class="content-wrapper">
              <h3>Mr. David</h3>
              <span>Accountant</span>
            </div>
          </div>

          <div class="navbar-menu">
            <ul class="menu">
              <li>
                <RouterLink to="/accountancy"><i class="fa-solid fa-house"></i>Dashboard</RouterLink>
              </li>
              <li>
                <RouterLink to="/accountancy/appointment-history"><i class="fa-solid fa-calendar-days"></i>Appointment History</RouterLink>
              </li>
              <li>
                <RouterLink to="/accountancy/prescription-history"><i class="fa-solid fa-prescription"></i>Prescription History</RouterLink>
              </li>
              <li>
                <a style="cursor:pointer" @click.prevent="LogoutUser"
                  ><i class="fas fa-sign-out"></i>Logout</a
                ></li>
              <!-- <li>
                <RouterLink to="/accountancy/patient-search"><i class="fas fa-search"></i>Patient Search</RouterLink>
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
/* eslint-disable */
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import { AccountantLogout } from "../../Store";
export default {
  name: 'LeftSidebar',
  props: {
    msg: String
  },
  data() {
    return {
      isUsersMenuOpen: false,
      isPatientsMenuOpen: false,
      isAppointmentsMenuOpen: false,
    }
  },
  methods: {
    CloseSidebar(){
      this.$emit("closeSidebar") // 👈 emit event
    },
    LogoutUser() {
      AccountantLogout()
        .then((response) => {
          const notyf = new Notyf({
            duration: 4000,
            position: { x: "right", y: "bottom" },
          });
          notyf.success({
            message: `Server : ${response.data.success}`,
          });
          localStorage.removeItem("token");
          window.location.href = "/accountancy-login";
        })
        .catch((err) => {
          if (err.response.status === 500) {
            const notyf = new Notyf({
              duration: 4000,
              position: { x: "right", y: "bottom" },
            });
            notyf.error({
              message: `Server : ${err.response.statusText}`,
            });
          }
        });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";


</style>
