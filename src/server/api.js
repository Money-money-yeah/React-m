import http from "./https.js";
//专门写aaa组件的请求接口
export const listApi = {
    // getAList:function(num){
    //     return http.get(`/page?page=${num}`);
    // }
    //上面的简写：
    // getAList:(num) => http.get(`/page?page=${num}`),
    getList:() => http.get("/allData")
    // getToken:() => http.get('/getToken')获取token方法
}

