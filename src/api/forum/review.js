import requst from "@/utils/requst";

//通过postId获取评论
export function getReviewByPostId(postId){


    return requst({
        url:'/forum/review/postId/' +postId,
        method: 'get',
    });

}

//通过postId获取评论数
export function getReviewCountByPostId(postId){


    return requst({
        url:'/forum/review/reviewcountByPostId/' +postId,
        method: 'get',
    });

}


//点赞
export function likeReviewByReviewId(reviewId, number){

    const params={
        number
    }

    return requst({
        url:'/forum/review/like/' +reviewId,
        params:params,
        method: 'post',
    });

}


//踩
export function notlikeReviewByReviewId(reviewId, number){

    const params={
        number
    }

    return requst({
        url:'/forum/review/notlike/' +reviewId,
        params: params,
        method: 'post',
    });

}



