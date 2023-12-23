import axios from "axios";

export const postModule={
    state: () => ({
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

    }),
    getters: {
        sortedPosts(state) {
            return [...state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]))
        },
        sortedSearch(state, getters) {
            return getters.sortedPosts.filter((post) => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()))
        }

    },
    mutations: {
        setPosts(state, posts){
            state.posts = posts;
        },
        setLoading(state, bool){
            state.isPostLoading = bool
        },
        setPage(state, page){
            state.page = page
        },
        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort
        },
        setTotalPages(state, totalPages){
            state.totalPages= totalPages
        },
        setSearchQuery(state, searchQuery){
            state.searchQuery= searchQuery
        },
        setShow(state, show){
            state.show = show
        },
        setSortOptions(state, sortOptions){
            state.sortOptions=sortOptions
        }

    },
    actions: {
        async fetchPosts({commit, state}) {
            try {
                commit('setLoading', true)
                const res = await  axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setPosts', res.data)
                commit('setLoading', false)
                commit('setTotalPages',  Math.ceil(res.headers['x-total-count']/state.limit))

            } catch (e) {
                console.log(e);
            }
        },

        async  loadMore({state, commit}) {
            try {
                commit('setLoading', true)
                commit('setPage', state.page +=1)
                const res = await  axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setPosts', [...state.posts, ...res.data] )
                commit('setLoading', false)
                commit('setTotalPages', Math.ceil(res.headers['x-total-count']/state.limit))


            } catch (e) {
                console.log(e);
            }

        }



    },
    namespaced: true


}