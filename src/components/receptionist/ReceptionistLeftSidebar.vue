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
              <h3>Receptionist</h3>
              <!-- <span>Neurologist</span> -->
            </div>
          </div>

          <div class="navbar-menu">
            <ul class="menu">
              <li>
                <RouterLink to="/receptionist"><i class="fa-solid fa-house"></i>Dashboard</RouterLink>
              </li>
              <li @click="isPatientsMenuOpen = !isPatientsMenuOpen">
                <RouterLink to="#" class="arrow-icon" :class="{ 'active': isPatientsMenuOpen }"><i class="fa-solid fa-user-nurse"></i>Patients</RouterLink>
                <ul class="sub-menu" :class="{ 'active': isPatientsMenuOpen }">
                  <li><RouterLink to="/receptionist/add-patient"><i class="fa-solid fa-arrow-right-long"></i> Add Patient</RouterLink></li>
                  <li><RouterLink to="/receptionist/manage-patient"><i class="fa-solid fa-arrow-right-long"></i> Manage Patient</RouterLink></li>
                </ul>
              </li>
              <li @click="isAppointmentsMenuOpen = !isAppointmentsMenuOpen">
                <RouterLink to="#" class="arrow-icon" :class="{ 'active': isAppointmentsMenuOpen }"><i class="fa-solid fa-calendar-days"></i>Appointments</RouterLink>
                <ul class="sub-menu" :class="{ 'active': isAppointmentsMenuOpen }">
                  <li><RouterLink to="/receptionist/appointment-history"><i class="fa-solid fa-arrow-right-long"></i>Appointments History</RouterLink></li>
                  <li><RouterLink to="/receptionist/add-appointment"><i class="fa-solid fa-arrow-right-long"></i>Add Appointments</RouterLink></li>
                </ul>
              </li>
              <!-- <li>
                <RouterLink to="/receptionist/patient-search"><i class="fas fa-search"></i>Patient Search</RouterLink>
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
      isUsersMenuOpen: false,
      isPatientsMenuOpen: false,
      isAppointmentsMenuOpen: false,
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
