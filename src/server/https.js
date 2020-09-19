import http from "axios";//引入axios
import qs from "qs"//qs在axios中一起下载了，就可以用json.parse/stringify了
//1、配置公共数据
// http.defaults.baseURL = "http://localhost:3001";//公共路径
http.defaults.baseURL = "http://localhost:3001";
http.defaults.timeout = 5000;//设置请求超时时间
// let token = JSON.parse(localStorage.getItem('token'));
//http.defaults.withCredentails = true//允许携带cookie(和后台商量，后台true前端才可以true)
//2、配置请求拦截
http.interceptors.request.use(function(config){
    if(config.method == "get" || config.method == "put"){//类型判断
        config.headers = {//设置请求头
            // "token":`zimo?${token}`,
            "Content-type":"application/json;charset=utf8"
        }
        //将前端数据转成json字符串传递给服务端
        config.data = qs.stringify(config.data)
    }else if(config.method == "post" || config.method == "delete"){
        config.headers = {
            'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
        }
        config.data = qs.stringify(config.data)
    }
    return config
},function(error){//请求失败的操作
     //const err = new Error(error);//处理错误方法
    const err = Promise.reject(error)//常用的处理错误的方法
    throw err;//相当于return 是专门暴露错误的语法
});
//3、配置响应拦截
http.interceptors.response.use(function(response){
    if(response.data.status == 200){
        console.log('响应成功') 
    }
    return response.data;
},function(error){
    //const err = new Error(error);
    const err = Promise.reject(error);
    throw err;
});

export default http;
