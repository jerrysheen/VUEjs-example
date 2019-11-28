import request from "@/utils/request"

export default {
    verification(){
        return request({
            url: '/user/pwd',
            method: 'post'
        })
    },
    updateNewPassword(newpass){
        return request({
            url: '/user/pwd',
            method: 'put',
            data:{
                newpass
            }
        })
    }
}