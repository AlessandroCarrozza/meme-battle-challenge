<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./pages/AppMain.vue";
import { store } from "./store";
import { getMeme } from './main';

export default {
    components: {
      AppHeader,
      AppMain,
    },
    data() {
      return {
        store,
      }
    },
  mounted() {
    getMeme();
  }
}
</script>

<template>
  <AppHeader></AppHeader>
  <AppMain></AppMain>
</template>

<style scoped lang="scss">
@use "./styles/general.scss";
</style>
