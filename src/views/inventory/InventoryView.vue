<template>
  <div class="admin-dashboard">
    <InventoryLeftSidebar :class="{ 'active' : openSidebar }" @closeSidebar="openSidebar = false" />
    <DashboardHeader @toggle="handleSidebar" />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardHeader from '@/components/inventory/DashboardHeader'
import InventoryLeftSidebar from '@/components/inventory/InventoryLeftSidebar'

export default {
  name: 'DoctorHome',
  components: {
    DashboardHeader,
    InventoryLeftSidebar
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
