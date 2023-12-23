<template>

<!--  <h3>{{$store.state.likes}}</h3>-->
<!--  <h1>{{$store.state.isAuth ? 'User is auth': "User isn't auth"}}</h1>-->
<!--  <div>-->
<!--    <custom-button @click="$store.commit('increment')">Like</custom-button>-->
<!--    <custom-button @click="$store.commit('decrement')">Dislike</custom-button>-->
<!--  </div>-->
<!--  <h2>Page of list items</h2>-->
<!--  <div style="display: flex; justify-content: space-between">-->
<!--    <custom-button @click="openModal">Add Post</custom-button>-->
<!--    <my-select v-model="selectedSort" :options="sortOptions"></my-select>-->
<!--  </div>-->
<!--  <my-input v-model="searchQuery" aria-placeholder="Search..." />-->

<!--  <modal-window v-model:show="show">-->
<!--    <post-form  @create="createPost" />-->
<!--  </modal-window>-->

<!--  <post-list-->
<!--      :posts="sortedSearch"-->
<!--      @deleteItem="deleteItem"-->
<!--      v-if="!isPostsLoading"-->
<!--  />-->
<!--  <h3 v-else>Loading...</h3>-->
<!--  <div v-intersection="loadMore" class="observer"></div>-->

<!--  <div style="display: flex; margin-top: 20px">-->
<!--    <div v-for="pageNumber in totalPages"-->
<!--         :key="pageNumber"-->
<!--         :class="{'current-page': page === pageNumber}"-->
<!--         class="pagination-block"-->
<!--         @click="changePage(pageNumber)"-->
<!--    >{{pageNumber}}</div>-->
<!--  </div>-->
</template>

<script>
import ModalWindow from "@/components/UI/Modal.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import MySelect from "@/components/UI/MySelect.vue";
import PostList from "@/components/PostList.vue";
import MyInput from "@/components/UI/MyInput.vue";
import PostForm from "@/components/PostForm.vue";


export default {
  components: {PostForm, MyInput, PostList, MySelect, CustomButton, ModalWindow},


  data() {
      return{
        posts:[],
        title: '',
        body: '',
        show: false,
        isPostsLoading: false,
        selectedSort: '',
        searchQuery: '',
        totalPages: '',
        page:1,
        limit: 10,
        sortOptions: [
          {value: 'title', name: 'name' },
          {value: 'body', name: 'body' }
        ]
      }},

    methods:{

      createPost(post){
        this.posts.push(post);
        this.show=false
      },
      deleteItem(post){
        this.posts=this.posts.filter((elem)=> elem.id !== post.id)
      },

      changePage(pageNumber){
        this.page = pageNumber
        this.fetchPosts()
      },


    },
    computed: {


      // watch: {
      //   selectedSort(newValue) {
      //    this.posts.sort((post1, post2) => {
      //      return post1[newValue].localeCompare(post2[newValue])
      //    })
      //
      //   },
      // },
    },
    mounted() {
      // this.fetchPosts()
    }
}
</script>

<style  scoped>



</style>