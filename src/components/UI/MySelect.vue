<template>
  <select v-model="selectedValue" @change="onSelectChange" class="select">
    <option disabled>Choose item...</option>
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedValue: this.modelValue,
    };
  },

  methods: {
    onSelectChange(e) {
      this.$emit('update:modelValue', e.target.value);
    },
  },
};
</script>

<style scoped>
.select {
  padding: 5px;
  height: 40px;
}
</style>
