<template>
  <div class="admin-dashboard">
   <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Edit Patient</h2>
         <span class="white">Welcome to Receptionist Dashboard</span>
       </div>

        <div class="main-content-body">
          <div class="add-patient-wrapper">
            <div class="add-patient-form dashboard-card">
              <div class="form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="First Name">
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="date" class="form-control" placeholder="Date of Birth">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <select class="form-control">
                            <option value="Gender">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Patient Address">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Patient Contact no">
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Last Name">
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Medical History">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="tel" class="form-control" placeholder="Phone">
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="email" class="form-control" placeholder="Patient Email">
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Patient Age">
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="Confirm Password">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group submit">
                      <input type="submit" class="btn-style medium round" value="Update">
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
