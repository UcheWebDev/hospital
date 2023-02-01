<template>
  <div class="admin-dashboard">
    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Inventory Dashboard</h2>
         <span class="white">Welcome to Inventory Dashboard</span>
       </div>

        <div class="main-content-body">
          <div class="admin-dashboard-routers">
            <div class="row">

              <div class="col-md-4">
                <RouterLink to="/inventory/inventory-history" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-warehouse"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Inventory History</h3>
                    <RouterLink to="/inventory/inventory-history" class="arrow-icon"> View Inventory History </RouterLink>
                  </div>
                </RouterLink>
              </div>


              <div class="col-md-4">
                <RouterLink to="/inventory/add-drug" class="login-card">
                  <div class="img-wrapper">
                    <i class="fa-solid fa-pills"></i>
                  </div>
                  <div class="content-wrapper">
                    <h3>Add Drug</h3>
                    <RouterLink to="/inventory/add-drug" class="arrow-icon">Add Drug</RouterLink>
                  </div>
                </RouterLink>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'AdminDashboard',
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>

</style>
