<template>
  <div v-if="posts.length > 0">
  <h3>List of items</h3>
    <TransitionGroup name="list" >
  <post-item
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @deleteItem="$emit('deleteItem', post)"
  />
    </TransitionGroup>
  </div>
  <h2 v-else style="color: red; font-size: 18px">The Item list is empty</h2>
</template>

<script>
import PostItem from "@/components/PostItem.vue";
export default {
  components:{
    PostItem
  },

  props:{
    posts:{
      type: Array,
      required: true
    },
    deletePost() {
    }
  }
}
</script>

<style scoped>


.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


.list-leave-active {
  position: absolute;
}


</style>