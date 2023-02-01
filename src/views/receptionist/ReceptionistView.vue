<template>
  <div class="admin-dashboard">
    <ReceptionistLeftSidebar :class="{ 'active' : openSidebar }" @closeSidebar="openSidebar = false" />
    <DashboardHeader @toggle="handleSidebar" />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardHeader from '@/components/receptionist/DashboardHeader'
import ReceptionistLeftSidebar from '@/components/receptionist/ReceptionistLeftSidebar'

export default {
  name: 'ReceptionistHome',
  components: {
    DashboardHeader,
    ReceptionistLeftSidebar
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
