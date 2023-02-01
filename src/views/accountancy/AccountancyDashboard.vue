<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Accountancy Dashboard</h2>
         <span class="white">Welcome to Pharmacy Accountancy</span>
       </div>

        <div class="main-content-body">
          <div class="admin-dashboard-routers">
            <div class="row">

              <div class="col-md-4">
                <RouterLink to="/accountancy/appointment-history" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-user-nurse"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Appointment History</h3>
                    <RouterLink to="/accountancy/appointment-history" class="arrow-icon"> Appointment History </RouterLink>
                  </div>
                </RouterLink>
              </div>

              <div class="col-md-4">
                <RouterLink to="/accountancy/prescription-history" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-user-nurse"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Prescription History</h3>
                    <RouterLink to="/accountancy/prescription-history" class="arrow-icon"> Prescription History </RouterLink>
                  </div>
                </RouterLink>
              </div>

              <div class="col-md-4">
                <RouterLink to="/accountancy/patient-search" class="login-card">
                  <div class="img-wrapper">
                    <i class="fas fa-search"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Search Patients</h3>
                    <RouterLink to="/accountancy/patient-search" class="arrow-icon">Search here</RouterLink>
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
