import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);


import Home from "@/views/home";

import Forum from "@/views/forum";

import Periphery from "@/views/periphery";
import Login from "@/views/login";
import Register from "@/views/register";
import Search from "@/views/search";

import ForumRecommend from "@/components/forum/ForumRecommend";
import ForumHot from "@/components/forum/ForumHot";
import ForumFollow from "@/components/forum/ForumFollow";

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
            path:"/forum",
            component:Forum,
            meta:{
                homeHead:true
            },
            children:[
                {
                    path: "",
                    redirect:"recommend"
                },
                {
                    name:"recommend",
                    path: "recommend",
                    component: ForumRecommend,
                    meta:{
                        homeHead:true
                    }
                },
                {
                    name:"follow",
                    path: "follow",
                    component: ForumFollow,
                    meta:{
                        homeHead:true
                    }
                },
                {
                    name:"hot",
                    path: "hot",
                    component: ForumHot,
                    meta:{
                        homeHead:true
                    }
                }
            ]
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