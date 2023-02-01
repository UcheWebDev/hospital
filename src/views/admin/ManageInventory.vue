<template>
    <div class="admin-dashboard">
      <section id="main-content" class="admin-dashboard">
        <div class="container-fluid">
          <div class="main-content-header">
            <h2 class="white">Manage Inventory Staff</h2>
            <span class="white">Manage inventory bio informations</span>
          </div>
  
          <div class="main-content-body">
            <div class="doctor-specialization-wrapper">
              <div class="doctor-specialization-table table-responsive">
                <DataTable
                  :fetchUrl="Tablelink"
                  :updateBtn="true"
                  :RemoveBtn="true"
                  :columns="[
                    'id',
                    'firstname',
                    'lastname',
                    'date of birth',
                    'gender',
                    'contact',
                    'email',
                    'address',
                    'created_at',
                    'updated_at',
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
        title="Update Bio Information"
      >
        <div class="modal-body-wrapper">
          <div class="form">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Firstname"
                v-model="form.firstname"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Lastname"
                v-model="form.lastname"
              />
            </div>
  
          
            
            <div class="form-group">
              <input
                type="tel"
                class="form-control"
                placeholder="Contact"
                v-model="form.contact"
              />
            </div>
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                placeholder="Doctor Email"
                v-model="form.email"
              />
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                placeholder="Enter Doctor Home Address"
                rows="3"
                v-model="form.addr"
              ></textarea>
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
  // @ is an alias to /src
  /* eslint-disable */
  import { Notyf } from "notyf";
  import "notyf/notyf.min.css";
  import {
    CheckAuthToken,
    UpdateInventoryStaffRecord,
    RemoveInventoryRecord,
  } from "../../Store";
  import DataTable from "../../components/DataTable.vue";
  export default {
    name: "ManageDoctors",
    components: {
      DataTable,
    },
    data() {
      return {
        Tablelink: "https://api.seftonhospital.com/api/AllInventorystaff",
        form: {
          firstname: null,
          lastname: null,
          contact: null,
          email: null,
          addr: null,
          id: null,
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
            this.$router.push("/admin-login");
            return false;
          }
         
        });
      },
      updateItem(e) {
        this.form.firstname = e.firstname;
        this.form.lastname = e.lastname;
        this.form.contact = e.contact;
        this.form.email = e.email;
        this.form.addr = e.address;
        this.form.id = e.id;
        this.$refs["update-modal"].show();
      },
      updateInfo() {
        this.isLoading = true;
        UpdateInventoryStaffRecord(this.form)
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
      removeItem(e) {
        console.log(e)
        const payload = { id: e };
        RemoveInventoryRecord(payload)
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
  