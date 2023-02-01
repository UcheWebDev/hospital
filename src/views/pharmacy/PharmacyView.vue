<template>
  <div class="admin-dashboard">
    <PharmacyLeftSidebar :class="{ 'active' : openSidebar }" @closeSidebar="openSidebar = false" />
    <DashboardHeader @toggle="handleSidebar" />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardHeader from '@/components/pharmacy/DashboardHeader'
import PharmacyLeftSidebar from '@/components/pharmacy/PharmacyLeftSidebar'

export default {
  name: 'ReceptionistHome',
  components: {
    DashboardHeader,
    PharmacyLeftSidebar
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
