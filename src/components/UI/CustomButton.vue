<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'custom-button'
}
</script>

<style scoped>

.btn{
  background-color: aqua;
  color: black;
  padding: 10px;
  height: 40px;
  width: 100px;
  text-wrap: none;
}

</style>