
import {getToken, setToken, removeToken} from "@/utils/token";
import {login, logout} from "@/api/oauth/oauth";
//state:仓库存储数据的地方
const state = {
    token:getToken()
};
//mutations:修改state的唯一手段
const mutations = {

    SETTOKEN(state, token){
        state.token = token
        setToken(token)
    },

    REMOVETOKEN(state){
        state.token = ''
        removeToken()
    }



};
//action:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {

    async accountLogin({commit}, {accountName, password}){

        let result = await login(accountName, password);

        if (result.code === 200){
            commit("SETTOKEN", result.token);
            return "ok";
        }else if (result.code === 500){
            return result.msg;
        }
        return "登录失败";

    },

    async accountLogout({commit}){

        let result = await logout();
        commit("REMOVETOKEN");

        if (result.code !== 200){
            console.log("退出登录失败！");
        }
    }



};
//getters:理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}