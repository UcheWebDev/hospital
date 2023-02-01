<template>
    <div class="admin-dashboard">
      <section id="main-content" class="admin-dashboard">
        <div class="container-fluid">
          <div class="main-content-header">
            <h2 class="white">Add Receptionist</h2>
            <span class="white">Add a new receptionist staff</span>
          </div>
  
          <div class="main-content-body">
            <div class="add-doctor-wrapper">
              <div class="add-doctor-form dashboard-card">
                <ValidationObserver v-slot="{ handleSubmit }">
                  <div class="form">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <ValidationProvider
                            name="firstname"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            
                            <input
                              type="text"
                              class="form-control"
                              placeholder="First Name"
                              v-model="form.firstname"
                            />
                            <span class="validated mt-2 text-danger">{{
                              errors[0]
                            }}</span>
                          </ValidationProvider>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <ValidationProvider
                                name="date of birth"
                                rules="required"
                                v-slot="{ errors }"
                              >
                               
                                <input
                                  type="date"
                                  class="form-control"
                                  placeholder="Date of Birth"
                                  v-model="form.dob"
                                />
                                <span class="validated mt-2 text-danger">{{
                                  errors[0]
                                }}</span>
                              </ValidationProvider>
                            </div>
                          </div>
                          
                          
                          <div class="col-md-6">
                            <div class="form-group">
                              
                              <select class="form-control" v-model="form.gender">
                                <option :value="form.gender">
                                  {{ form.gender }}
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                              </select>
                            </div>
                           
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <ValidationProvider
                            name="lastname"
                            rules="required"
                            v-slot="{ errors }"
                          >
                            
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Last Name"
                              v-model="form.lastname"
                            />
                            <span class="validated mt-2 text-danger">{{
                              errors[0]
                            }}</span>
                          </ValidationProvider>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group">
                              <ValidationProvider
                                name="contact no"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                
                                <input
                                  type="tel"
                                  class="form-control"
                                  placeholder="Receptionist Contact no"
                                  v-model="form.phone"
                                />
                                <span class="validated mt-2 text-danger">{{
                                  errors[0]
                                }}</span>
                              </ValidationProvider>
                            </div>
                          </div>
  
  
                          <div class="col-md-6">
                            <div class="form-group">
                              <ValidationProvider
                                name="email"
                                rules="required|email"
                                v-slot="{ errors }"
                              >
                                
                                <input
                                  type="email"
                                  class="form-control"
                                  placeholder="Receptionist Email"
                                  v-model="form.email"
                                />
                                <span class="validated mt-2 text-danger">{{
                                  errors[0]
                                }}</span>
                              </ValidationProvider>
                            </div>
                          
                          </div>
                        </div>
                    </div>
                        
                          <div class="col-md-6">
                            <div class="form-group">
                              <ValidationProvider
                                name="address"
                                rules="required"
                                v-slot="{ errors }"
                              >
                                
                                <textarea
                                  class="form-control"
                                  placeholder="Enter Receptionist Home Address"
                                  rows="3"
                                  v-model="form.addr"
                                ></textarea>
                                <span class="validated mt-2 text-danger">{{
                                  errors[0]
                                }}</span>
                              </ValidationProvider>
                            </div>
                          </div>
                        </div>
                      
  
                      <div class="col-md-6">
                        <div class="row">
                            <div class="form-group submit">
                          <b-button
                            variant=""
                            class="btn-style medium round"
                            @click.prevent="handleSubmit(AddMedicalStaff)"
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
                  </div>
                </ValidationObserver>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  /* eslint-disable */
  // @ is an alias to /src
  import { Notyf } from "notyf";
  import "notyf/notyf.min.css";
  import {
    ValidationProvider,
    ValidationObserver,
    extend,
    localize,
  } from "vee-validate";
  import {
    CheckAuthToken,
    FetchAllSpecialization,
    AddReceptionist,
  } from "../../Store";
  import en from "vee-validate/dist/locale/en.json";
  import * as rules from "vee-validate/dist/rules";
  // install rules and localization
  Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
  });
  localize("en", en);
  export default {
    name: "AddDoctor",
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data() {
      return {
        form: {
          firstname: null,
          lastname: null,
          dob: null,
          gender: "Gender",
          phone: null,
          email: null,
          addr: null,
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
      AddMedicalStaff() {
        this.isLoading = true;
        AddReceptionist(this.form)
          .then((response) => {
            this.isLoading = false;
            const notyf = new Notyf({
              duration: 4000,
              position: { x: "right", y: "bottom" },
            });
            notyf.success({
              message: `Server : ${response.data.success}`,
            });
            // this.form.firstname = null
            // this.form.lastname = null
            // this.form.email = null
            // this.form.specialty = 'select'
            // this.form.gender = 'other'
            // this.form.fee = null
            // this.form.phone = null
            // this.form.addr = null
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
  
  span .validated {
    display: block;
    margin-top:5px
  }
  </style>
  