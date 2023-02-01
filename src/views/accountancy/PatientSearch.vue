<template>
  <div class="admin-dashboard">
     <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Search</h2>
         <span class="white">Welcome to Accountancy Dashboard</span>
       </div>

        <div class="main-content-body">
          <div class="add-doctor-wrapper">
            <div class="add-doctor-form dashboard-card">
              <div class="form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Search by Name">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Search by Mobile No">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group submit">
                      <input type="submit" class="btn-style medium round" value="Search">
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
// @ is an alias to /src
export default {
  name: 'HomeView',
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
