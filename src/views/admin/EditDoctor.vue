<template>
  <div class="admin-dashboard">
    <AdminLeftSidebar :class="{ 'active' : openSidebar }" @closeSidebar="openSidebar = false" />
    <DashboardHeader @toggle="handleSidebar" />

    <section id="main-content" class="admin-dashboard">
      <div class="container-fluid">
       <div class="main-content-header">
         <h2 class="white">Edit Doctor</h2>
         <span class="white">Welcome to Admin Dashboard</span>
       </div>

        <div class="main-content-body">
          <div class="add-doctor-wrapper">
            <div class="add-doctor-form dashboard-card">
              <div class="form">
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="First Name" value="Sarita">
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
                          <input type="text" class="form-control" placeholder="Doctor Consultancy Fees">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Doctor Contact no">
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <input type="text" class="form-control" placeholder="Last Name" value="Pandey">
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Speciality">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="tel" class="form-control" placeholder="Phone">
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="email" class="form-control" placeholder="Doctor Email">
                        </div>
                      </div>

                      <div class="col-md-6">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Website URL">
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
import DashboardHeader from '@/components/admin/DashboardHeader'
import AdminLeftSidebar from '@/components/admin/AdminLeftSidebar'

export default {
  name: 'HomeView',
  components: {
    DashboardHeader,
    AdminLeftSidebar
  },
  data() {
    return {
      openSidebar: false,
    }
  },
  methods: {
    handleSidebar() {
      // this.showMenu = !this.showMenu;
      this.openSidebar = true;
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
