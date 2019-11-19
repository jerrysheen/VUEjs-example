import request from '@/utils/request'

export default {
    getList(){
        return request({
            url: '/member/list',
            method: 'get'
        })
    }
}