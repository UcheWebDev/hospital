<template>
  <div class="admin-dashboard">

    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Appointment History</h2>
         <span class="white">See all appointment history</span>
       </div>

        <div class="main-content-body">
          <div class="doctor-specialization-wrapper">
            <div class="doctor-specialization-table table-responsive">
              <DataTable
                :fetchUrl="Tablelink"
                :columns="[
                  'id',
                  'patient name',
                  'card number',
                  'specialization',
                  'appointment_time',
                  'appointment_date',
                ]"
                @remove-item="removeItem"
                @edit-item="updateItem"
              />
            </div>
          </div>
        </div>

      </div>
    </section>

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
    removeItem(e){
      const payload = { id: e };
      RemoveAppointmentRecord(payload)
        .then((response) => {
          const notyf = new Notyf({
            duration: 4000,
            position: { x: "right", y: "bottom" },
          });
          notyf.success({
            message: `Server : ${response.data.success}`,
          });
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
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
