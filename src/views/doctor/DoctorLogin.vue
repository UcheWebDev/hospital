<template>
  <div class="admin-Login login-page">
    <Header />

    <section class="login-page-wrapper">
      <div class="container">
        <div class="form">
          <h2 class="white">Medical Staff Login</h2>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Enter User Name" v-model="formData.firstname">
            <span class="icon"><i class="fa-solid fa-user"></i></span>
          </div>
          <div class="form-group">
            <input type="password" placeholder="Password" class="form-control" v-model="formData.password">
            <span class="icon"><i class="fa-solid fa-lock"></i></span>
          </div>
          <div class="form-group submit">
            <!-- <RouterLink to="doctor" class="btn-style medium round">Login</RouterLink> -->
            <b-button
              variant=""
              class="btn-style medium round"
              @click.prevent="InitializeLoginAction"
            >
              <span v-if="isLoading">
                <b-spinner small></b-spinner>
                <span class="sr-only">Loading...</span>
              </span>
              <span v-else>login</span>
            </b-button>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
// @ is an alias to /src
import { MedicalStaffLogin } from "../../Store";
import Header from '@/components/Header'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 


export default {
  name: 'HomeView',
  components: {
    Header,
  },
  data(){
    return {
      isLoading: false,
      formData: {
        firstname: null,
        password: null,
      },
    };
  },
   methods: {
    InitializeLoginAction() {
      this.isLoading = true;
      if(!this.formData.firstname || !this.formData.password){
        const notyf = new Notyf({duration: 4000,position: { x: "right", y: "top" },});
        this.isLoading = false;
        notyf.error({message: `Auth : all fields are required`});
        return false
      }
      MedicalStaffLogin(this.formData).then((response) => {
          this.isLoading = true;
          const notyf = new Notyf({duration: 4000,position: { x: "right", y: "top" },});
          localStorage.setItem("token", response.data.token);
          notyf.success({message: `Auth : ${response.data.message}`,});
          setTimeout(() => {
                 this.isLoading = false;
                 this.$router.push("/doctor");
            }, 3000);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            const notyf = new Notyf({duration: 4000,position: { x: "right", y: "top" },});
            this.errors = "";
            this.isLoading = false;
            notyf.error({
                    message: `Auth : ${err.response.data.invalid}`,
                });
          }
          if (err.response.status === 500) {
            const notyf = new Notyf({duration: 4000,position: { x: "right", y: "top" },});
            this.errors = "";
            this.isLoading = false;
            notyf.error({
                    message: `Server : ${err.response.statusText}`,
                });
          }
          if (err.response.status === 422) {
            this.isLoading = false;
            const notyf = new Notyf({duration: 4000,position: { x: "right", y: "top" },});
            notyf.error({
                    message: `Server : ${err.response.statusText}`,
                });
          }

        });
    },
  },
}
</script>

<style scoped>
.btn-style {
  background: #01d8da;
  border: 2px solid #01d8da;
  color: #ffffff;
}
.btn-style span {
  color: #ffffff;
}
</style>
