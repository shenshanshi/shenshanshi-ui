//state:仓库存储数据的地方
const state = {
    count: 1
};
//mutations:修改state的唯一手段
const mutations = {
    ADD(state){
        state.count++;
        console.log(state.count);
    }
};
//action:处理action,可以书写自己的业务逻辑，也可以处理异步
const actions = {
    add({commit}){
        console.log("add");
        commit("ADD")
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