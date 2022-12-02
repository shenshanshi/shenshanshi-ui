
import requst from "@/utils/requst";


//登录方法
export function login(accountName, password){

    const data = {
        accountName,
        password,
    }
    return requst({
        url:'/login',
        method: 'post',
        data: data
    });

}



export function logout(){
    return requst({
        url:'/logout',
        method: 'post'
    });
}