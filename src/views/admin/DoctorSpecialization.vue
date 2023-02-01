<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
        <div class="main-content-header">
          <h2 class="white">Doctor Specialization</h2>
          <span class="white">Add staff specializations</span>
        </div>

        <div class="main-content-body">
          <div class="doctor-specialization-wrapper">
            <div class="add-specialization">
              <a href="#" class="btn-style medium" v-b-modal.add-specialization
                >Add Specialization</a
              >
            </div>
            <div class="doctor-specialization-table table-responsive">
              <DataTable
                :fetchUrl="Tablelink"
                :columns="['id', 'specialization', 'created_at', 'updated_at']"
                @remove-item="removeItem"
                :refresh="refresh"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <b-modal id="add-specialization" title="Add Specialization">
      <div class="modal-body-wrapper">
        <div class="form">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              v-model="formData.data"
              placeholder="Enter Doctor Specialization"
            />
          </div>
          <div class="form-group">
            <b-button
              variant=""
              class="btn-style small"
              @click.prevent="AddSpecialization"
            >
              <span v-if="isLoading">
                <b-spinner small></b-spinner>
                <span class="sr-only">Loading...</span>
              </span>
              <span v-else>Add</span>
            </b-button>
          </div>
        </div>
      </div>
    </b-modal>

    <b-modal id="edit-specialization" title="Edit Specialization">
      <div class="modal-body-wrapper">
        <div class="form">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              value="General Physician"
              placeholder="Edit Doctor Specialization"
            />
          </div>
          <div class="form-group">
            <input type="submit" class="btn-style small" value="Update" />
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import { Notyf } from "notyf";
import "notyf/notyf.min.css"; // for React, Vue and Svelte
import DataTable from "../../components/DataTable.vue";
import {
  CheckAuthToken,
  isLoggedIn,
  AddSpecialization,
  RemoveSpecialization,
} from "../../Store";
export default {
  name: "DoctorSpecialization",
  components: {
    DataTable,
  },
  data() {
    return {
      isLoading: false,
      Tablelink: "https://api.seftonhospital.com/api/specializations",
      formData: {
        data: null,
      },
    };
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
    AddSpecialization() {
      this.isLoading = true;
      AddSpecialization(this.formData)
        .then((response) => {
          this.isLoading = false;
          this.formData.data = null;
          const notyf = new Notyf({
            duration: 4000,
            position: { x: "right", y: "top" },
          });
          notyf.success({
            message: `Server : ${response.data.success}`,
          });
        })
        .catch((err) => {
          this.isLoading = false;
          if (err.response.status === 422) {
            const notyf = new Notyf({
              duration: 4000,
              position: { x: "right", y: "bottom" },
            });
            this.errors = "";
            this.isLoading = false;
            notyf.error({
              message: `Server : ${err.response.data.error}`,
            });
          }

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
    removeItem(e) {
      const payload = { id: e };
      RemoveSpecialization(payload).then((response) => {
        const notyf = new Notyf({
          duration: 4000,
          position: { x: "right", y: "bottom" },
        });
        notyf.success({
          message: `Server : ${response.data.success}`,
        });
      });
      
    },
  },
};
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
