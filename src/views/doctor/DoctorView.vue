<template>
  <div class="admin-dashboard">
    <DoctorLeftSidebar :class="{ 'active' : openSidebar }" @closeSidebar="openSidebar = false" />
    <DashboardHeader @toggle="handleSidebar" />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardHeader from '@/components/doctor/DashboardHeader'
import DoctorLeftSidebar from '@/components/doctor/DoctorLeftSidebar'

export default {
  name: 'DoctorHome',
  components: {
    DashboardHeader,
    DoctorLeftSidebar
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
