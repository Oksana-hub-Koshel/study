<template>
  <form style="display: flex; flex-direction: column;gap: 10px" @submit.prevent>
    <my-input
        v-focus
        v-model="post.title"
        placeholder="Write title"

      />

    <my-input
        v-model="post.body"
        placeholder="Write body"
        />
    <div style="display: flex; justify-content: flex-end">
      <custom-button @click="createPost">Add new post</custom-button>
    </div>


  </form>
</template>

<script>

import MyInput from "@/components/UI/MyInput.vue";
import CustomButton from "@/components/UI/CustomButton.vue";

export default {
  components: {CustomButton, MyInput},

  data() {
  return{
    post:{
      title: '',
      body: ''
    }

  }
  },
  methods:{
    createPost(){
      this.post.id = Date.now();
      this.$emit('create', this.post);
      this.post={
        title: '',
        body: ''
      }
    }
  }

}


</script>



<style scoped>


</style>
