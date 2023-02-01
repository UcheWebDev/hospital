<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Doctor Dashboard</h2>
         <span class="white">Welcome to Doctor Dashboard</span>
       </div>

        <div class="main-content-body">
          <div class="admin-dashboard-routers">
            <div class="row">

              <div class="col-md-4">
                <RouterLink to="/doctor/edit-profile" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-user-doctor"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>My Profile</h3>
                    <RouterLink to="/doctor/edit-profile" class="arrow-icon"> Update Profile</RouterLink>
                  </div>
                </RouterLink>
              </div>

              <div class="col-md-4">
                <RouterLink to="/doctor/appointment-history" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-calendar-days"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>My Appointments</h3>
                    <RouterLink to="/doctor/appointment-history" class="arrow-icon"> View Appointment History </RouterLink>
                  </div>
                </RouterLink>
              </div>


              <div class="col-md-4">
                <RouterLink to="/doctor/manage-patient" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-user-nurse"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Manage Patients</h3>
                    <RouterLink to="/doctor/manage-patient" class="arrow-icon"> Total Patients: 5 </RouterLink>
                  </div>
                </RouterLink>
              </div>

              <div class="col-md-4">
                <RouterLink to="/doctor/patient-search" class="login-card">
                  <div class="img-wrapper">
                    <i class="fas fa-search"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Search Patients</h3>
                    <RouterLink to="/doctor/patient-search" class="arrow-icon">Search here</RouterLink>
                  </div>
                </RouterLink>
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

export default {
  name: 'AdminDashboard',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>

</style>
