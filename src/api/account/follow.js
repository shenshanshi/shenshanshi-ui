
import requst from "@/utils/requst";

//推荐关注
export function getRecommendAccount(){

    return requst({
        url:'/account/follow/recommend',
        method: 'get',
    });

}


//推荐关注
export function follow(a, b){

    const data = {
        follow:a,
        beFollow:b
    }

    return requst({
        url:'/account/follow/recommend',
        method: 'post',
        data: data
    });

}

