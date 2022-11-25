import axios from "axios";


const requst = axios.create({

    // baseURL:"/api",

    timeout:5000,

})

//拦截器
requst.interceptors.request.use((config)=>{



    return config;

})

requst.interceptors.response.use((res)=>{

    //服务器响应成功

    return res.data;

},error => {
    //服务器响应失败

    return Promise.reject(new error("fauile"));
})

export default requst;