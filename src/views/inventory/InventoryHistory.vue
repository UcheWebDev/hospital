<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
        <div class="main-content-header">
          <h2 class="white">Inventory History</h2>
          <span class="white">All inventory data</span>
        </div>

        <div class="main-content-body">
          <div class="doctor-specialization-wrapper">
            <div class="doctor-specialization-table table-responsive">
              <DataTable
                :fetchUrl="Tablelink"
                :updateBtn="true"
                :columns="['id', 'Drug name', 'Qty', 'Drug type', 'Price']"
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
      title="Update Drug Information"
    >
      <div class="modal-body-wrapper">
        <div class="form">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              placeholder="Drug Name"
              v-model="form.drugname"
            />
          </div>
          <div class="form-group">
            <input
              type="number"
              class="form-control"
              placeholder="Drug Price"
              v-model="form.price"
            />
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
// @ is an alias
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import DataTable from "../../components/DataTable.vue";
import {
  CheckAuthToken,
  UpdateDrugsInventory,
  RemoveAppointmentRecord,
  isLoggedIn,
} from "../../Store";

export default {
  name: "AppointmentHistory",
  components: {
    DataTable,
  },
  data() {
    return {
      Tablelink: "https://api.seftonhospital.com/api/allinventory",
      form: {
        drugname: null,
        drugtype: 'select',
        quantity: null,
        price: null,
        id:null
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
          this.$router.push("/inventory-login");
          return false;
        }
      });
    },
    updateItem(e) {
      this.form.id = e.id
      this.form.drugname = e.drugs_name
      this.form.price = e.price
      this.form.drugtype = e.drugs_type
      this.$refs["update-modal"].show();
    },
    updateInfo() {
      this.isLoading = true;
      UpdateDrugsInventory(this.form)
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
