
import requst from "@/utils/requst";


//登录方法
export function getGootsList(params){

    return requst({
        url:'/periphery/goods/list',
        method: 'get',
        params:params
    });

}

