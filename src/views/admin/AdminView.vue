<template>
  <div class="admin-dashboard">
    <AdminLeftSidebar :class="{ 'active' : openSidebar }" @closeSidebar="openSidebar = false" />
    <DashboardHeader @toggle="handleSidebar" />
    <router-view/>

  </div>
</template>

<script>
// @ is an alias to /src
import DashboardHeader from '@/components/admin/DashboardHeader'
import AdminLeftSidebar from '@/components/admin/AdminLeftSidebar'

export default {
  name: 'AdminHome',
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
