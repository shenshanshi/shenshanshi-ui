import requst from "@/utils/requst";

//获取帖子
export function getpost(fenlei){

    return requst({
        url:'/forum/post/' + fenlei,
        method: 'get',
    });

}
