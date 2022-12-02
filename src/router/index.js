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
            meta:{
                homeHead:true
            }
        },
        {
            path:"/",
            redirect:"/home",
            meta:{
                homeHead:true
            }
        },

        {
            path:"/animation",
            component:Animation,
            meta:{
                homeHead:true
            }
        },
        {
            path:"/comic",
            component:Comic,
            meta:{
                homeHead:true
            }
        },
        {
            path:"/forum",
            component:Forum,
            meta:{
                homeHead:true
            }
        },
        {
            path:"/Game",
            component:Game,
            meta:{
                homeHead:true
            }
        },
        {
            path:"/music",
            component:Music,
            meta:{
                homeHead:true
            }
        },
        {
            path:"/novel",
            component:Novel,
            meta:{
                homeHead:true
            }
        },
        {
            path:"/periphery",
            component:Periphery,
            meta:{
                homeHead:true
            }
        },
        {
            path:"/login",
            component:Login,
            meta:{
                // homeHead:true
            }
        },
        {
            path:"/register",
            component:Register,
            meta:{
                // homeHead:true
            }
        }        ,
        {
            path:"/search/:theme",
            component:Search,
            name:"homeSearch",
            meta:{
                homeHead:true
            }
        }








    ]

})