<template>
  <div class="post">
    <div>
      <div style="display: flex; align-items: center"><p>Name:</p><strong>{{post.title}}</strong></div>
      <div style="display: flex; align-items: center"><p>Body:</p><strong>{{post.body}}</strong></div>
    </div>
    <div class="btn-wrapp">
      <custom-button @click="$emit('deleteItem', post)">Delete Item</custom-button>
      <custom-button @click="$router.push(`/list/${post.id}`)">Open</custom-button>
    </div>

  </div>

</template>

<script>

import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  components: {CustomButton},

  props:{
    post: {
      type: Object,
      required: true
    }

  },
}

</script>


<style scoped>
.post{
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 10px 20px;
  border: 2px solid black;
  margin-bottom: 24px;
}

.btn-wrapp{
  display: flex;
  gap: 10px;
  align-items: center;
}


</style>