<template>
  <input
      type="text"
      class="input"
      :value="modelValue"
      @input="updateInput"
      :placeholder="placeholder"
  >
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
    placeholder: String
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", e.target.value)
    }
  }
}
</script>

<style scoped>

.input {
  padding: 10px;
  min-width: 600px;
}

</style>