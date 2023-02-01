<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
        <div class="main-content-header">
          <h2 class="white">Add Appointment</h2>
          <span class="white">Create a new appointment record</span>
        </div>

        <div class="main-content-body">
          <div class="add-patient-wrapper">
            <div class="add-patient-form dashboard-card">
              <ValidationObserver v-slot="{ handleSubmit }">
              <div class="form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <ValidationProvider
                          name="patient name"
                          rules="required"
                          v-slot="{ errors }"
                        >
                      <input type="text" class="form-control" placeholder="Patient Name" v-model="form.patientname">
                      <span class="validated mt-2 text-danger">{{
                            errors[0]
                          }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group">
                          <select
                              class="form-control"
                              v-model="form.specialization"
                            >
                              <option :value="form.specialization">
                                {{ form.specialization }}
                              </option>
                              <option
                                v-for="specialty in spec"
                                :key="specialty.specialization"
                                :value="specialty.specialization"
                              >
                                {{ specialty.specialization }}
                              </option>
                            </select>
                        </div>
                      </div>
                      <!-- <div class="col-md-6">
                        <div class="form-group">
                          <select class="form-control">
                            <option value="Select Doctor">Select Doctor</option>
                            <option value="Select Doctor">Select Doctor</option>
                            <option value="Select Doctor">Select Doctor</option>
                          </select>
                        </div>
                      </div> -->

                    </div>
                    
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <ValidationProvider
                          name="card number"
                          rules="required"
                          v-slot="{ errors }"
                        >
                      <input type="text" class="form-control" placeholder="Card Number" v-model="form.cardnumber">
                      <span class="validated mt-2 text-danger">{{
                            errors[0]
                          }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                      <input type="time" class="form-control" placeholder="Appointment Time" v-model="form.time">
                    </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="date" class="form-control" placeholder="Appointment Date" v-model="form.date">
                        </div>
                      </div>
                    </div>
                   
                  </div>
                  <div class="col-md-12">
                    <div class="form-group submit">
                      <b-button
                          variant=""
                          class="btn-style medium round"
                          @click.prevent="handleSubmit(AddAppointment)"
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
// @ is an alias to /src
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import {
  CheckAuthToken,
  AddApointmentHistory,
  FetchAllSpecialization,
  isLoggedIn,
} from "../../Store";
import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
} from "vee-validate";

import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
// install rules and localization
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});
localize("en", en);

export default {
  name: 'AddPatient',
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      form:{
        patientname:null,
        specialization:'choose specialization',
        cardnumber:null,
        time:null,
        date:null
      },
      spec:null,
      isLoading: false,
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
        FetchAllSpecialization().then(
          (response) => (this.spec = response.data)
        );
      });
    },
    AddAppointment() {
      this.isLoading = true;
      AddApointmentHistory(this.form)
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

span .validated {
  display: block;
}

</style>
