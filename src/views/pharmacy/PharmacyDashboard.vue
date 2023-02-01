<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Pharmacy Dashboard</h2>
         <span class="white">Welcome to Pharmacy Dashboard</span>
       </div>

        <div class="main-content-body">
          <div class="admin-dashboard-routers">
            <div class="row">

              <div class="col-md-4">
                <RouterLink to="/pharmacy/medical-history" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-user-nurse"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Prescription History</h3>
                    <RouterLink to="/pharmacy/medical-history" class="arrow-icon"> Prescription History </RouterLink>
                  </div>
                </RouterLink>
              </div>

              <!-- <div class="col-md-4">
                <RouterLink to="/pharmacy/patient-search" class="login-card">
                  <div class="img-wrapper">
                    <i class="fas fa-search"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Search Patients</h3>
                    <RouterLink to="/pharmacy/patient-search" class="arrow-icon">Search here</RouterLink>
                  </div>
                </RouterLink>
              </div> -->

            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line
/* eslint-disable */
// @ is an alias to /src
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import {
  CheckAuthToken,
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
          this.$router.push("/pharmacy-login");
          return false;
        }
      });
    },
  },
}
</script>

<style scoped>

</style>
