<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Add Drug</h2>
         <span class="white">Welcome to Inventory Dashboard</span>
       </div>

        <div class="main-content-body">
          <div class="add-patient-wrapper">
            <div class="add-patient-form dashboard-card">
              <div class="form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Drug Name" v-model="form.drugname">
                    </div>
                    <div class="form-group">
                      <select class="form-control" v-model="form.drugtype">
                            <option :value="form.drugtype">
                                {{ form.drugtype }}</option>
                            <option value="Tablet">Tablet</option>
                            <option value="Capsule">Capsule</option>
                            <option value="Bottle">Bottle</option>
                            <option value="Vials">Vials</option>
                            <option value="Ampoules">Ampoules</option>
                            <option value="Infusion">Infusion</option>
                            <option value="A pair">A pair</option>
                            <option value="Card">Card</option>
                            <option value="Syringe">Syringe (2ml\5ml\10ml\20ml\50ml)</option>
                            <option value="Neddle">Neddle</option>
                            <option value="Gloves">Gloves</option>
                            <option value="Clanps">Clanps</option>
                            <option value="Plaster">Plaster</option>
                            <option value="Catheter">Catheter</option>
                            <option value="Pack">Pack</option>
                            <option value="Oil">Oil</option>
                            <option value="Syrup">Syrup</option>
                            <option value="Caplet">Caplet</option>
                            <option value="Injections">Injections</option>
                            <option value="Amplos">Amplos</option>
                            <option value="Artemether">Artemether</option>
                            <option value="Creams">Creams</option>
                            
                          </select>
                      <!-- <input type="text" class="form-control" placeholder="Drug Type" v-model="form.drugtype"> -->
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="number" class="form-control" placeholder="Drug Quantity" v-model="form.quantity">
                    </div>
                    <div class="form-group">
                      <input type="number" class="form-control" placeholder="Price Per Quantity" v-model="form.price">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group submit">
                      <!-- <input type="submit" class="btn-style medium round" value="Add Drug"> -->
                      <b-button
                          variant=""
                          class="btn-style medium round"
                          @click.prevent="AddDrugs"
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
  AddDrugs
} from "../../Store";

export default {
  name: 'AddPatient',
  components: {
  },
  data() {
    return {
      form: {
        drugname: null,
        drugtype: 'select',
        quantity: null,
        price: null
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
          this.$router.push("/inventory-login");
          return false;
        }
      });
    },
    AddDrugs(){
      this.isLoading = true;
      AddDrugs(this.form)
        .then((response) => {
          this.isLoading = false;
          const notyf = new Notyf({
            duration: 4000,
            position: { x: "right", y: "bottom" },
          });
          notyf.success({
            message: `Server : ${response.data.success}`,
          });
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
