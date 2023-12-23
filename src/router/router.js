import {createRouter, createWebHistory} from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import PostItemById from "@/pages/PostItemById.vue";
import PostPageWithStore from "@/pages/PostPageWithStore.vue";


const routes= [
    {
        path: '/',
        component: MainPage
    },
    {
        path: '/list/:id',
        component: PostItemById
    },
    {
        path: '/list',
        component: PostPageWithStore
    }

]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router