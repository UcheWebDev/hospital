<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Receptionist Dashboard</h2>
         <span class="white">Welcome to Receptionist Dashboard</span>
       </div>

        <div class="main-content-body">
          <div class="admin-dashboard-routers">
            <div class="row">

              <div class="col-md-4">
                <RouterLink to="/receptionist/appointment-history" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-calendar-days"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>My Appointments</h3>
                    <RouterLink to="/receptionist/appointment-history" class="arrow-icon"> View Appointment History </RouterLink>
                  </div>
                </RouterLink>
              </div>


              <div class="col-md-4">
                <RouterLink to="/receptionist/manage-patient" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-user-nurse"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Manage Patients</h3>
                    <RouterLink to="/receptionist/manage-patient" class="arrow-icon"> Click here </RouterLink>
                  </div>
                </RouterLink>
              </div>

              <div class="col-md-4">
                <RouterLink to="/receptionist/patient-search" class="login-card">
                  <div class="img-wrapper">
                    <i class="fas fa-search"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Search Patients</h3>
                    <RouterLink to="/receptionist/patient-search" class="arrow-icon">Search here</RouterLink>
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
import {
  CheckAuthToken,
  isLoggedIn,
} from "../../Store";
export default {
  name: 'AdminDashboard',
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
    this.HandleAuth();
  },
  methods: {
    HandleAuth() {
      CheckAuthToken().then((response) => {
        if (!response) {
          this.$router.push("/receptionist-login");
          return false;
        }
      });
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
