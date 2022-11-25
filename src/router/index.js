import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


import Home from "@/views/home";
import Animation from "@/views/animation";
import Comic from "@/views/comic";
import Forum from "@/views/forum";
import Game from "@/views/game";
import Music from "@/views/music";
import Novel from "@/views/novel";
import Periphery from "@/views/periphery";
import Login from "@/views/login";
import Register from "@/views/register";
import Search from "@/views/search";

export default new VueRouter({

    routes: [

        {
            path:"/home",
            component:Home,
        },
        {
            path:"/",
            redirect:"/home"
        },

        {
            path:"/animation",
            component:Animation
        },
        {
            path:"/comic",
            component:Comic
        },
        {
            path:"/forum",
            component:Forum
        },
        {
            path:"/Game",
            component:Game
        },
        {
            path:"/music",
            component:Music
        },
        {
            path:"/novel",
            component:Novel
        },
        {
            path:"/periphery",
            component:Periphery
        },
        {
            path:"/login",
            component:Login
        },
        {
            path:"/register",
            component:Register
        }        ,
        {
            path:"/search/:theme",
            component:Search,
            name:"homeSearch"
        }








    ]

})