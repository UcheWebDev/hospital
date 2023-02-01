<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
        <div class="main-content-header">
          <h2 class="white">Manage Patients</h2>
          <span class="white">Welcome to Doctor Dashboard</span>
        </div>

        <div class="main-content-body">
          <div class="doctor-specialization-wrapper">
            <div class="doctor-specialization-table table-responsive">
              <DataTable
                :fetchUrl="Tablelink"
                :RemoveBtn="false"
                :updateBtn="true"
                :columns="[
                  'Id',
                  'Firstname',
                  'Lastname',
                  'Patient Age',
                  'Gender',
                  'Address',
                  'Contact Info',
                  'Folder Number',
                ]"
                @edit-item="updateItem"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-modal
      id="add-issue-drugs"
      scrollable
      ref="update-modal"
      title="Patient Medical Record"
    >
      <div class="modal-body-wrapper">
        <b-tabs content-class="mt-3" justified>
          <b-tab title="All Medical Diagnosis" active>
            <div class="doctor-specialization-table table-responsive">
              <DataTable
                :fetchUrl="MedicalRecordHistory"
                :RemoveBtn="false"
                :updateBtn="false"
                :columns="[
                  'Id',
                  'Medical Record',
                  'Added By',
                  'Specialization'
                ]"
                @edit-item="updateItem"
              />
            </div>
          </b-tab>
          <b-tab title="Add Medical Diagnosis">
            <div class="">
              <b-form-textarea
                id="textarea"
                placeholder="Type medical diagnosis here .."
                v-model="diagnosis.text"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </div>
            <b-button
              variant=""
              class="btn-style medium round mt-3"
              @click.prevent="AddMedicalDiagnosis"
            >
              <span v-if="isLoading">
                <b-spinner small></b-spinner>
                <span class="sr-only">Loading...</span>
              </span>
              <span v-else>Add</span>
            </b-button>
          </b-tab>
          <b-tab title="Doctor's Prescription">
            <div class="">
              <div class="">
              <b-form-textarea
                id="textarea"
                placeholder="Enter Prescription.."
                v-model="form.text"
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </div>
            </div>
            <b-button
              variant=""
              class="btn-style medium round mt-3"
              @click.prevent="AddPrescription"
            >
              <span v-if="isLoading">
                <b-spinner small></b-spinner>
                <span class="sr-only">Loading...</span>
              </span>
              <span v-else>Add</span>
            </b-button>
          </b-tab>
        </b-tabs>
      </div>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line
/* eslint-disable */
// @ is an alias to /src
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import {
  CheckAuthToken,
  FetchPatientMedicalRecord,
  MedicalStaffProfile,
  AddMedicalDiagnosis,
  AddMedicalPrescriptions
} from "../../Store";
import DataTable from "../../components/DataTable.vue";
export default {
  name: "ManagePatient",
  components: {
    DataTable,
  },
  data() {
    return {
      Tablelink: "https://api.seftonhospital.com/api/AllPatientRecords",
      MedicalRecordHistory:"https://api.seftonhospital.com/api/MedicalRecords",
      form: {},
      medicalHistory: [],
      diagnosis: {
        text: "",
        issuedby: "",
        specilization: "",
        patient: "",
      },
      form:{
        text: "",
        issuedby: "",
        specilization: "",
        patient: "",
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
          this.$router.push("/doctor-login");
          return false;
        }
        MedicalStaffProfile().then((response) => {
          this.diagnosis.issuedby =
            response.data.firstname + " " + response.data.lastname;
          this.diagnosis.specilization = response.data.specialization;
          this.form.issuedby =
            response.data.firstname + " " + response.data.lastname;
          this.form.specilization = response.data.specialization;
        });
      });
    },
    updateItem(e) {
      this.diagnosis.patient = e.firstname + " " + e.lastname;
      this.form.patient = e.firstname + " " + e.lastname;
      FetchPatientMedicalRecord().then((response) => {
        this.medicalHistory = response.data;
      });
      this.$refs["update-modal"].show();
    },
    AddMedicalDiagnosis() {
      this.isLoading = true;
      AddMedicalDiagnosis(this.diagnosis)
        .then((response) => {
          this.isLoading = false;
          const notyf = new Notyf({
            duration: 4000,
            position: { x: "right", y: "bottom" },
          });
          notyf.success({
            message: `Server : ${response.data.success}`,
          });
          this.diagnosis.text = "";
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
    AddPrescription(){
      this.isLoading = true;
      AddMedicalPrescriptions(this.form)
        .then((response) => {
          this.isLoading = false;
          const notyf = new Notyf({
            duration: 4000,
            position: { x: "right", y: "bottom" },
          });
          notyf.success({
            message: `Server : ${response.data.success}`,
          });
          this.form.text = "";
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

.quote {
  display: inline-block;
  margin: 1em;
  overflow: hidden;
}
.quote blockquote {
  background-color: #fff;
  border: solid 2px #757575;
  display: inline-block;
  margin: 0;
  padding: 1em;
  position: relative;
}
.quote blockquote:before {
  background-color: #fff;
  bottom: -10%;
  content: "";
  left: 0;
  position: absolute;
  right: 0;
  top: -10%;
  transform: rotate(-15deg) skew(5deg);
}
.quote blockquote cite {
  display: block;
  font-style: italic;
  text-align: right;
}
.quote blockquote cite:before {
  content: "- ";
}
.quote blockquote > * {
  position: relative;
  z-index: 1;
}

.animated-border-quote {
  display: inline-block;
  margin: 1em;
  max-width: 20em;
  overflow: hidden;
}
.animated-border-quote blockquote {
  background-color: #fff;
  border: solid 2px #757575;
  display: inline-block;
  margin: 0;
  padding: 1em;
  position: relative;
}
.animated-border-quote blockquote:before {
  animation: clockwise 30s infinite linear;
  background-color: #fff;
  bottom: 10%;
  content: "";
  left: 0;
  opacity: 0.5;
  position: absolute;
  right: 0;
  top: 10%;
}
.animated-border-quote blockquote:after {
  animation: counter 30s infinite linear;
  background-color: #fff;
  bottom: 10%;
  content: "";
  left: 0;
  opacity: 0.5;
  position: absolute;
  right: 0;
  top: 10%;
}
.animated-border-quote blockquote cite {
  display: block;
  font-style: italic;
  text-align: right;
}
.animated-border-quote blockquote cite:before {
  content: "- ";
}
.animated-border-quote blockquote > * {
  position: relative;
  z-index: 1;
}

@keyframes clockwise {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes counter {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-360deg);
  }
}
.animated-shadow-quote {
  display: inline-block;
  margin: 1em;
  max-width: 20em;
  position: relative;
}
.animated-shadow-quote blockquote {
  animation: shadows 2s linear infinite alternate;
  display: inline-block;
  margin: 0;
  padding: 1em;
}
.animated-shadow-quote blockquote cite {
  display: block;
  font-style: italic;
  text-align: right;
}
.animated-shadow-quote blockquote cite:before {
  content: "- ";
}

@keyframes shadows {
  0% {
    box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.25);
    transform: scale(0.95);
  }
  100% {
    box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.25);
    transform: scale(1);
  }
}
.square-brackets-quote {
  display: inline-block;
  font-family: sans-serif;
  margin: 1em;
  max-width: 20em;
}
.square-brackets-quote blockquote {
  border: solid 1em #ccc;
  display: inline-block;
  margin: 0;
  padding: 1em;
  position: relative;
}
.square-brackets-quote blockquote:before {
  background-color: #fff;
  bottom: -1em;
  content: "";
  left: 2em;
  position: absolute;
  right: 2em;
  top: -1em;
}
.square-brackets-quote blockquote cite {
  color: #757575;
  display: block;
  font-size: small;
  font-style: normal;
  text-align: right;
  text-transform: uppercase;
}
.square-brackets-quote blockquote > * {
  position: relative;
  z-index: 1;
}

.giant-quotes-quote {
  display: inline-block;
  font-family: sans-serif;
  margin: 1em;
  max-width: 20em;
}
.giant-quotes-quote blockquote {
  display: inline-block;
  margin: 0;
  padding: 1em;
  position: relative;
}
.giant-quotes-quote blockquote:before {
  color: #f90;
  content: "“";
  font-size: 4em;
  left: 0;
  line-height: 0.75em;
  position: absolute;
  top: 0;
  transform: scale(2, 8);
  transform-origin: top;
}
.giant-quotes-quote blockquote:after {
  color: #f90;
  content: "”";
  font-size: 4em;
  line-height: 0.75em;
  position: absolute;
  right: 0;
  top: 0;
  transform: scale(2, 8);
  transform-origin: top;
}
.giant-quotes-quote blockquote > * {
  padding: 0 2em;
}
.giant-quotes-quote blockquote cite {
  color: #c60;
  display: block;
  font-style: normal;
  text-align: right;
  text-transform: uppercase;
}
</style>
