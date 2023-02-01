<template>
  <div id="app">
    <div id="loading-wrapper" :class="{'active' : !dataLoaded}">
      <LoadingScreen></LoadingScreen>
    </div>
    <router-view/>
  </div>
</template>


<script>
import LoadingScreen from '@/components/LoadingScreen';

export default {
  name: "app",
  components: {
    LoadingScreen,
  },
  data() {
    return {
      dataLoaded: false,
    }
  },
  methods: {
    youAPI() {
      this.dataLoaded = true
    },
  },
  mounted() {
    window.setInterval(() => {
      this.youAPI();
    }, 3000)
  },

}
</script>
<style lang="scss" scoped>
@import "./src/assets/scss/standard.scss";

#loading-wrapper {
  display: none;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99999;
  background: $primary01;

  &.active {
    display: block;
  }
}


</style>
