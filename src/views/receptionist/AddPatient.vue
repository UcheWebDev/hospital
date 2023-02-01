<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Add Patient</h2>
         <span class="white">Welcome to Receptionist Dashboard</span>
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
                          name="Firstname"
                          rules="required"
                          v-slot="{ errors }"
                        >
                      <input type="text" class="form-control" placeholder="Patient Firstname" v-model="form.firstname">
                      <span class="validated mt-2 text-danger">{{
                            errors[0]
                          }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <ValidationProvider
                          name="age"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <input type="number" class="form-control" placeholder="Age" v-model="form.age">
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
                                {{ form.gender }}</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <ValidationProvider
                          name="Patient address"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <input type="text" class="form-control" placeholder="Patient Address" v-model="form.address">
                          <span class="validated mt-2 text-danger">{{
                            errors[0]
                          }}</span>
                        </ValidationProvider>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <ValidationProvider
                          name="Patient Contact No"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <input type="text" class="form-control" placeholder="Patient Contact No" v-model="form.contact">
                          <span class="validated mt-2 text-danger">{{
                            errors[0]
                          }}</span>
                        </ValidationProvider>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <ValidationProvider
                          name="Contact No Next Of Kin"
                          rules="required"
                          v-slot="{ errors }"
                        >
                      <input type="text" class="form-control" placeholder="Contact No Next Of Kin" v-model="form.contactnext">
                      <span class="validated mt-2 text-danger">{{
                            errors[0]
                          }}</span>
                        </ValidationProvider>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <ValidationProvider
                          name="Lastname"
                          rules="required"
                          v-slot="{ errors }"
                        >
                      <input type="text" class="form-control" placeholder="Patient Lastname" v-model="form.lastname">
                      <span class="validated mt-2 text-danger">{{
                            errors[0]
                          }}</span>
                        </ValidationProvider>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <ValidationProvider
                          name="Name of next of kin"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <input type="text" class="form-control" placeholder="Name Of Next Of Kin" v-model="form.namenext">
                          <span class="validated mt-2 text-danger">{{
                            errors[0]
                          }}</span>
                        </ValidationProvider>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <ValidationProvider
                          name="Address next of kin"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <input type="text" class="form-control" placeholder="Address next Of Kin" v-model="form.addressnext">
                          <span class="validated mt-2 text-danger">{{
                            errors[0]
                          }}</span>
                        </ValidationProvider>
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <ValidationProvider
                          name="Folder Number"
                          rules="required"
                          v-slot="{ errors }"
                        >
                          <input type="text" class="form-control" placeholder="Folder Number" v-model="form.foldernumber">
                          <span class="validated mt-2 text-danger">{{
                            errors[0]
                          }}</span>
                        </ValidationProvider>
                        </div>
                      </div>

                      
                    </div>
                    <div class="form-group">
                      <textarea
                                class="form-control"
                                placeholder="Special Information"
                                rows="3"
                                v-model="form.specialinformations"
                              ></textarea>
                      
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group submit">
                      <b-button
                          variant=""
                          class="btn-style medium round"
                          @click.prevent="handleSubmit(CreateNewPatient)"
                        >
                          <span v-if="isLoading">
                            <b-spinner small></b-spinner>
                            <span class="sr-only">Loading...</span>
                          </span>
                          <span v-else>Create</span>
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
  CheckAuthToken,
  AddPatientRecord
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
    ValidationObserver
  },
  data() {
    return {
      form:{
        firstname:null,
        lastname:null,
        age:null,
        gender : 'sex',
        address : null,
        contact : null,
        contactnext : null,
        namenext : null,
        addressnext : null,
        foldernumber : null,
        specialinformations : null
      },
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
      });
    },
    CreateNewPatient(){
      this.isLoading = true;
      AddPatientRecord(this.form)
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
    }
  },
}
</script>

<style lang="scss" scoped>
btn-style {
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
