<template>
  <div class="admin-dashboard">
    <AccountancyLeftSidebar :class="{ 'active' : openSidebar }" @closeSidebar="openSidebar = false" />
    <DashboardHeader @toggle="handleSidebar" />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardHeader from '@/components/accountancy/DashboardHeader'
import AccountancyLeftSidebar from '@/components/accountancy/AccountancyLeftSidebar'

export default {
  name: 'ReceptionistHome',
  components: {
    DashboardHeader,
    AccountancyLeftSidebar
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
