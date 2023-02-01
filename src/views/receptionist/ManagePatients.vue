<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
        <div class="main-content-header">
          <h2 class="white">Manage Patients</h2>
          <span class="white">Manage patients records</span>
        </div>

        <div class="main-content-body">
          <div class="doctor-specialization-wrapper">
            <div class="doctor-specialization-table table-responsive">
              <DataTable
                :fetchUrl="Tablelink"
                :RemoveBtn="true"
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
// @ is an alias to /src
import { CheckAuthToken } from "../../Store";
import DataTable from "../../components/DataTable.vue";
export default {
  name: "ManagePatient",
  components: {
    DataTable,
  },
  data() {
    return {
      Tablelink: "https://api.seftonhospital.com/api/AllPatientRecords",
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
  },
};
</script>

<style lang="scss" scoped></style>
