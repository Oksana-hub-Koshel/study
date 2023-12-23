<template>
  <navbar-items />
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import NavbarItems from "@/components/UI/NavbarItems.vue";

export default defineComponent({
  components: {NavbarItems}
})
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
.app{
  padding: 24px;
}
p{
  margin-bottom: 0px;
  margin-top: 0px;
}
body{
  margin: 0;
}

</style>
