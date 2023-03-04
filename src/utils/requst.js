import axios from "axios";
import JSONBig from 'json-bigint'


const requst = axios.create({

    // baseURL:"/api",

    timeout:5000,
    transformResponse: [
        function (data) {
            // 对 data 进行任意转换处理
            try {
                return JSONBig.parse(data)
            } catch (err) {
                return data
            }
        }
    ]

})

//拦截器
requst.interceptors.request.use((config)=>{

    var token = localStorage.getItem("TOKEN")
    config.headers.Authorization  = "Bearer " + token

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