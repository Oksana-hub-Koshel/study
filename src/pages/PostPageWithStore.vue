<template>
  <h2>Page of list items</h2>

  <my-input
      :model-value="searchQuery"
      @update:model-value="setSearchQuery"
      placeholder="Search..."
  />
  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; margin-bottom: 24px">
    <custom-button @click="openModal">Add Post</custom-button>
    <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions">
    </my-select>
  </div>


  <modal-window v-model:show="show">
    <post-form  @create="createPost" />
  </modal-window>

  <post-list
      :posts="sortedSearchQuery"
      v-if="!isPostsLoading"
      @deleteItem="deleteItem"
  />
  <h3 v-else>Loading...</h3>
  <div v-intersection="loadMore" class="observer"></div>

  <div style="display: flex; margin-top: 20px">
    <div v-for="pageNumber in totalPages"
         :key="pageNumber"
         :class="{'current-page': page === pageNumber}"
         class="pagination-block"

    >{{pageNumber}}</div>
  </div>
</template>

<script>
import ModalWindow from "@/components/UI/Modal.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import PostList from "@/components/PostList.vue";
import MyInput from "@/components/UI/MyInput.vue";
import PostForm from "@/components/PostForm.vue";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  components: {PostForm, MyInput, PostList, MySelect, CustomButton, ModalWindow},

  data(){
    return {
      show: false
    }

},
  methods:{
  ...mapMutations({
    setPage: 'post/setPage',
    setSearchQuery: 'post/setSearchQuery',
    setSelectedSort: 'post/setSelectedSort'

  }),
    ...mapActions({
      loadMore: 'post/loadMore',
      fetchPosts: 'post/fetchPosts'

    }),
    ...mapGetters({

    }),

    createPost(post){
      this.posts.push(post);
      this.show=false
    },
    openModal(){
      this.show=true

    },
    deleteItem(post){
      this.posts=this.posts.filter((elem)=> elem.id !== post.id)
    },

  },
  computed: {
    ...mapState({
      posts: state=> state.post.posts,
      title: state=> state.post.title,
      body: state=> state.post.body,
      show: state=> state.post.show,
      isPostsLoading: state=> state.post.isPostsLoading,
      selectedSort: state=> state.post.selectedSort,
      searchQuery: state=> state.post.searchQuery,
      totalPages: state => state.post.totalPages,
      page: state=> state.post.page,
      sortOptions: state => state.post.sortOptions
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedSearchQuery: 'post/sortedSearch'
    })
  },
  mounted() {
    this.fetchPosts()
  }
}
</script>

<style  scoped>

.pagination-block{
  border: 1px solid grey;
  padding: 10px;
}
.current-page{
  background-color: #dec0ea;
  border: 2px solid black;
}

.observer{
  height: 40px;

}

</style>