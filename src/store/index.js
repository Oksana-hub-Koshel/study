import {createStore} from "vuex";
import {postModule} from "@/store/PostModule";

export default createStore({
      modules:{
          post: postModule

}

})