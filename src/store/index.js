import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import home from "@/store/home";
import account from "@/store/account";

export default new Vuex.Store({

    modules:{
        account,
        home
    }
})