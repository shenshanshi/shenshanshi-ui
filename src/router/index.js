import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);




import Forum from "@/views/forum";

import Periphery from "@/views/periphery";
import Login from "@/views/login";
import Register from "@/views/register";
import Search from "@/views/search";


export default new VueRouter({

    routes: [

        {
            path:"/",
            redirect:"/forum",
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
            path:"/resources",
            component:()=>import('@/views/resources/index.vue'),
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