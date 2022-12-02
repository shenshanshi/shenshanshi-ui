
//保存token
export function setToken(token){
    localStorage.setItem('TOKEN', token);
}

//获取token
export function getToken(){
    localStorage.getItem('TOKEN')
}


export function removeToken(){
    localStorage.removeItem('TOKEN')
}