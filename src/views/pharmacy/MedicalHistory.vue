<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
        <div class="main-content-header">
          <h2 class="white">Pharmacy History</h2>
          <span class="white">Welcome to Pharmacy Dashboard</span>
        </div>

        <div class="main-content-body">
          <div class="doctor-specialization-wrapper">
            <!-- <div class="add-specialization">
              <a href="#" class="btn-style medium" v-b-modal.add-issue-drugs>Issue Drugs</a>
            </div> -->
            <div class="doctor-specialization-table table-responsive">
              <DataTable
                :fetchUrl="Tablelink"
                :updateBtn="true"
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
                @edit-item="updateItem"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-modal id="add-issue-drugs" title="Issue Drugs" ref="update-modal">
      <div class="modal-body-wrapper">
        <div class="form">
          <div class="form-group">
            <select class="form-control" @change="getDrugRelatedToType($event.target.value)">
              <option value="select">select drug type</option>
              <option
                v-for="drugtype in drugTypes"
                :key="drugtype.id"
                :value="drugtype"
              >
                {{ drugtype }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <select class="form-control" @change="getDrugDetails($event.target.value)">
              <option value="select">select drugs</option>
              <option
                v-for="drugName in drugNames"
                :key="drugName.id"
                :value="drugName.drugs_name"
              >
                {{ drugName.drugs_name }}
              </option>
            </select>
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              v-model="form.qty"
              placeholder="Drugs Quantity"
              @blur="calculateDrugPrice"
            />
          </div>
          <div class="form-group">
            <input type="submit" class="btn-style small" value="Add" @click="add" />
          </div>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
// @ is an alias
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import DataTable from "../../components/DataTable.vue";
import { CheckAuthToken, FetchAllDrugTypes , FetchTypeRelatedDrugs , GetSelectedDrugDetails} from "../../Store";

export default {
  name: "AppointmentHistory",
  components: {
    DataTable,
  },
  data() {
    return {
      Tablelink: "https://api.seftonhospital.com/api/AllPrescriptionRequest",
      isLoading: false,
      drugTypes: null,
      drugNames:null,
      form:
      {
        TotalPricePerDrug:null,
        drugName:null,
        drugType:null,
        qty:null,
        patients_name:null,
        prescribed_by:null,
        specialization:null
      },
      calc:{
        drugQty:null,
        priceperQty:null
      },
      qty:null,
      issuedrugs:[]
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
        FetchAllDrugTypes().then(
          (response) => (this.drugTypes = response.data)
        );
      });
    },
    updateItem(e) {
      this.form.patients_name = e.patients_name;
      this.form.prescribed_by = e.prescribed_by;
      this.form.specialization = e.specialization
      this.$refs["update-modal"].show();
    },
    getDrugRelatedToType(value){
      this.form.drugType = value
      FetchTypeRelatedDrugs(value).then((response) => this.drugNames = response.data)
    },
    getDrugDetails(e){
      this.form.drugName = e
      GetSelectedDrugDetails(e).then((response) => {
        this.calc.priceperQty = response.data[0].price
      })
    },
    calculateDrugPrice(e){
      const qty = parseInt(e.target.value)
      const TotalPrice = qty * parseInt(this.calc.priceperQty)
      this.form.TotalPricePerDrug = TotalPrice
    },
    add(){

      // this.issuedrugs.unshift(this.form)
      this.issuedrugs.push({...this.form})
      // this.issuedrugs.push(this.form)
      console.log(this.issuedrugs)

      for(var i=0; i< this.issuedrugs.length; i++){
        console.log(this.issuedrugs[i].TotalPricePerDrug = this.issuedrugs[i].TotalPricePerDrug + this.issuedrugs[i].TotalPricePerDrug, "total")

      }
      
      
    }
  },
  
};
</script>

<style lang="scss" scoped></style>
