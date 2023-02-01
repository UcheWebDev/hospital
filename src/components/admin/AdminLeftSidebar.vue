<template>
  <div class="left-sidebar">
    <div id="left-sidebar">
      <div class="left-sidebar-wrapper">
        <RouterLink to="/" class="logo">
          <img src="../../assets/images/logo.png" alt="Logo" />
        </RouterLink>
        <div class="tab-menu">
          <div class="author-profile-wrapper">
            <div class="img-wrapper">
              <img
                src="../../assets/images/doctor-profile-img.jpg"
                alt="Profile Image"
              />
            </div>
            <div class="content-wrapper">
              <h3>Admin</h3>
              <!-- <span>Neurologist</span> -->
            </div>
          </div>

          <div class="navbar-menu">
            <ul class="menu">
              <li>
                <RouterLink to="/admin"
                  ><i class="fa-solid fa-house"></i>Dashboard</RouterLink
                >
              </li>
              <li @click="isDoctorMenuOpen = !isDoctorMenuOpen">
                <RouterLink
                  to="#"
                  class="arrow-icon"
                  :class="{ active: isDoctorMenuOpen }"
                  ><i class="fa-solid fa-user-doctor"></i>Manage
                  Staffs</RouterLink
                >
                <ul class="sub-menu" :class="{ active: isDoctorMenuOpen }">
                  <li>
                    <RouterLink to="/admin/doctor-specialization"
                      ><i class="fa-solid fa-arrow-right-long"></i> Staff
                      Specialization
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/admin/add-doctor"
                      ><i class="fa-solid fa-arrow-right-long"></i> Add
                      Medical Staff</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/admin/add-receptionist"
                      ><i class="fa-solid fa-arrow-right-long"></i> Add
                      Receptionist Staff</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/admin/add-inventory"
                      ><i class="fa-solid fa-arrow-right-long"></i> Add
                      Inventory Staff</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/admin/add-accountant"
                      ><i class="fa-solid fa-arrow-right-long"></i> Add
                      Accountant</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/admin/add-pharmacy"
                      ><i class="fa-solid fa-arrow-right-long"></i> Add
                      Pharmacy Staff</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/admin/manage-doctor"
                      ><i class="fa-solid fa-arrow-right-long"></i> Manage Medical
                      Staff</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/admin/manage-receptionist"
                      ><i class="fa-solid fa-arrow-right-long"></i> Manage Receptionist
                  </RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/admin/manage-pharmacist"
                      ><i class="fa-solid fa-arrow-right-long"></i> Manage Pharmacists
                  </RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/admin/manage-accountant"
                      ><i class="fa-solid fa-arrow-right-long"></i> Manage Accountants
                  </RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/admin/manage-inventory"
                      ><i class="fa-solid fa-arrow-right-long"></i> Manage Inventory Staff
                  </RouterLink
                    >
                  </li>
                </ul>
              </li>
              <!--              <li @click="isUsersMenuOpen = !isUsersMenuOpen">
                <RouterLink to="#" class="arrow-icon" :class="{ 'active': isUsersMenuOpen }"><i class="fa-solid fa-users"></i>Users</RouterLink>
                <ul class="sub-menu" :class="{ 'active': isUsersMenuOpen }">
                  <li><RouterLink to="manage-user"><i class="fa-solid fa-arrow-right-long"></i>  Manage Users </RouterLink></li>
                </ul>
              </li>-->
              <li @click="isPatientsMenuOpen = !isPatientsMenuOpen">
                <RouterLink
                  to="#"
                  class="arrow-icon"
                  :class="{ active: isPatientsMenuOpen }"
                  ><i class="fa-solid fa-user-nurse"></i>Patients</RouterLink
                >
                <ul class="sub-menu" :class="{ active: isPatientsMenuOpen }">
                  <li>
                    <RouterLink to="/admin/manage-patient"
                      ><i class="fa-solid fa-arrow-right-long"></i> Manage
                      Patients
                    </RouterLink>
                  </li>
                </ul>
              </li>
              <li>
                <RouterLink to="/admin/appointment-history"
                  ><i class="fa-solid fa-calendar-days"></i>Appointments
                  History</RouterLink
                >
              </li>
              <!-- <li>
                <RouterLink to="/admin/patient-search"
                  ><i class="fas fa-search"></i>Patient Search</RouterLink
                >
              </li> -->
              <li>
                <a style="cursor:pointer" @click.prevent="LogoutUser"
                  ><i class="fas fa-sign-out"></i>Logout Admin</a
                >
              </li>
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
import { AdminLogout } from "../../Store";
export default {
  name: "LeftSidebar",
  props: {
    msg: String,
  },
  data() {
    return {
      isDoctorMenuOpen: false,
      isUsersMenuOpen: false,
      isPatientsMenuOpen: false,
    };
  },
  methods: {
    CloseSidebar() {
      this.$emit("closeSidebar"); // 👈 emit event
    },
    LogoutUser() {
      AdminLogout()
        .then((response) => {
          const notyf = new Notyf({
            duration: 4000,
            position: { x: "right", y: "bottom" },
          });
          notyf.success({
            message: `Server : ${response.data.success}`,
          });
          localStorage.removeItem("token");
          window.location.href = "/admin-login";
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";
</style>
