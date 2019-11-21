import request from '@/utils/request'

export default {
    getList(){
        return request({
            url: '/member/list',
            method: 'get'
        })
    },

    //search a cartain data, and get page,size information
    search(page, size, searchMap){
        return request({
            url: `/member/list/search/${page}/${size}`,
            method: 'post',
            data: searchMap
        })
    },

    //edit one's personal infomation
    getMemberById(id){
        return request({
            url:`/member/edit/${id}`,
            method: 'get'
        })
    },
    updateEdit(editedData){
        return request({
            url:`/member/edit/${editedData.id}`,
            method: 'put',
            data: editedData
        })

    }

}