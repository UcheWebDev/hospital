<template>
  <div class="admin-dashboard">

    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Appointment History</h2>
         <span class="white">See all appointment </span>
       </div>


        <div class="main-content-body">
          <div class="doctor-specialization-wrapper">
            <div class="doctor-specialization-table table-responsive">
              <DataTable
                :fetchUrl="Tablelink"
                :updateBtn="true"
                :RemoveBtn="false"
                :columns="[
                  'id',
                  'patient name',
                  'card number',
                  'specialization',
                  'appointment_time',
                  'appointment_date',
                  'status'
                ]"
                @remove-item="removeItem"
                @edit-item="updateItem"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
    <b-modal
      id="add-issue-drugs"
      ref="update-modal"
      title="Update Appointment Information"
    >
      <div class="modal-body-wrapper">
        <div class="form">
          <div class="form-group">
            <select class="form-control" v-model="form.status">
              <option :value="form.status">
                {{ form.status }}
              </option>
              <option value="seen by doctor">seen</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
          
          <div class="form-group">
            <b-button
              variant=""
              class="btn-style medium round"
              @click.prevent="updateInfo"
            >
              <span v-if="isLoading">
                <b-spinner small></b-spinner>
                <span class="sr-only">Loading...</span>
              </span>
              <span v-else>Update</span>
            </b-button>
          </div>
        </div>
      </div>
    </b-modal>
    

  </div>
</template>

<script>
// @ is an alias
/* eslint-disable */
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import DataTable from "../../components/DataTable.vue";
import {
  CheckAuthToken,
  RemoveAppointmentRecord,
  UpadateAppointmentRecord,
  isLoggedIn,
} from "../../Store";

export default {
  name: 'AppointmentHistory',
  components: {
    DataTable
  },
  data() {
    return {
      Tablelink: "https://api.seftonhospital.com/api/AllAppointmentRequest",
      form:{
        status:'',
        patients_name:''
      },
      isLoading:false
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
    updateInfo() {
      this.isLoading = true;
      UpadateAppointmentRecord(this.form)
        .then((response) => {
          this.isLoading = false;
          const notyf = new Notyf({
            duration: 4000,
            position: { x: "right", y: "bottom" },
          });
          notyf.success({
            message: `Server : ${response.data.success}`,
          });
          this.$refs["update-modal"].hide();
        })
        .catch((err) => {
          this.isLoading = false;
          if (err.response.status === 500) {
            const notyf = new Notyf({
              duration: 4000,
              position: { x: "right", y: "bottom" },
            });
            notyf.error({
              message: `Server : ${err.response.statusText}`,
            });
            this.$refs["update-modal"].hide();
          }
        });
    },
    updateItem(e) {
      // console.log(e)
      this.form.status = e.appointment_status
      this.form.patients_name = e.patients_name
      this.$refs["update-modal"].show();
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
