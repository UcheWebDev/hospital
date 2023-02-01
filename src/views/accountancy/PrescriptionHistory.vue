<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
        <div class="main-content-header">
          <h2 class="white">Prescription History</h2>
          <span class="white">View prescription history</span>
        </div>
        <b-modal id="approve-appointment" title="" ref="update-modal">
          <div class="modal-body-wrapper">
            <div class="form">
              <div class="form-group">
                <label for="department">Update Prescription status</label>
                <select class="form-control" v-model="form.status">
                  <option :value="form.status">
                    {{ form.status }}
                  </option>
                  <option value="Approved">Approved</option>
                </select>
              </div>

              <div class="form-group submit">
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
        <div class="main-content-body">
          <div class="doctor-specialization-wrapper">
            <div class="doctor-specialization-table table-responsive">
              <DataTable
                :fetchUrl="Tablelink"
                :updateBtn="false"
                :RemoveBtn="false"
                :columns="[
                  'id',
                  'patient name',
                  'prescription',
                  'prescribed by',
                  'specialization',
                  'prescription status',
                  'created_at',
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
import { CheckAuthToken, UpdatePrescription, isLoggedIn } from "../../Store";

export default {
  name: "AppointmentHistory",
  components: {
    DataTable,
  },
  data() {
    return {
      Tablelink: "https://api.seftonhospital.com/api/AllPrescriptionRequest",
      form: {
        status: "",
        patients_name: "",
      },
      isLoading: false,
    };
  },
  mounted() {
    this.HandleAuth();
  },
  methods: {
    HandleAuth() {
      CheckAuthToken().then((response) => {
        if (!response) {
          this.$router.push("/accountancy-login");
          return false;
        }
      });
    },
    updateInfo() {
      this.isLoading = true;
      UpdatePrescription(this.form)
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
      this.form.status = e.prescription_status;
      this.form.patients_name = e.patients_name;
      this.$refs["update-modal"].show();
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  .form-control {
    padding-left: 0;
  }
  .submit {
    text-align: center;
  }
}

.btn-style {
  background: #01d8da;
  border: 2px solid #01d8da;
  color: #ffffff;
}
.btn-style span {
  color: #ffffff;
}
</style>
