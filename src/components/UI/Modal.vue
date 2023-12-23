<template>
  <div v-if="show" class="dialog" @click="hideModal">
    <div class="dialog-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal-window",
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal(){
      this.$emit("update: show", false)

    }
  }

}
</script>

<style  scoped>
.dialog{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: rgb(0,0,0,0.5);
  display: flex;
}
.dialog-content{
  padding: 24px;
  margin: auto;
  background-color: white;

}

</style>