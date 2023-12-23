<template>
  <div class="wrapp">
    <div @click="$router.push('/')">LOGO</div>
    <div class="nav">
      <custom-button @click="$router.push('/')">Home</custom-button>
      <custom-button @click="$router.push('/list')">Posts</custom-button>

<!--      <router-link to="/">Home</router-link>-->
<!--      <router-link to="/list">Posts</router-link>-->
    </div>
  </div>

</template>

<script>
import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  components: {CustomButton}

}
</script>

<style>

.wrapp{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: azure;
  box-shadow: 0px 0px 2px rgba(145, 158, 171, 0.24), 0px 16px 32px -4px rgba(145, 158, 171, 0.24);
  padding: 24px;
}

.nav{
  display: flex;
  gap: 20px;
  align-items: center;
  text-decoration: none;
}

</style>