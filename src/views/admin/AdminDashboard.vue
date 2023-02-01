<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Admin Dashboard</h2>
         <span class="white">Welcome Admin</span>
       </div>

        <div class="main-content-body">
          <div class="admin-dashboard-routers">
            <div class="row">
              <div class="col-md-4">
                <RouterLink to="/admin/manage-doctor" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-user-doctor"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Manage Staff</h3>
                    <RouterLink to="/admin/manage-doctor" class="arrow-icon">click here</RouterLink>
                  </div>
                </RouterLink>
              </div>

              <div class="col-md-4">
                <RouterLink to="/admin/appointment-history" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-calendar-days"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Appointments</h3>
                    <RouterLink to="/admin/appointment-history" class="arrow-icon">click here </RouterLink>
                  </div>
                </RouterLink>
              </div>


              <div class="col-md-4">
                <RouterLink to="/admin/manage-patient" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-user-nurse"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Manage Patients</h3>
                    <RouterLink to="/admin/manage-patient" class="arrow-icon"> Click here </RouterLink>
                  </div>
                </RouterLink>
              </div>

              <div class="col-md-4">
                <RouterLink to="/admin/patient-search" class="login-card">
                  <div class="img-wrapper">
                    <i class="fas fa-search"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Search Patients</h3>
                    <RouterLink to="/admin/patient-search" class="arrow-icon">Search here</RouterLink>
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
          this.$router.push("/admin-login");
          return false;
        }
      });
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
