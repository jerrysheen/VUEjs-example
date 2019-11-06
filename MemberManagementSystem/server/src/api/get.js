import instance from "@/utils/request"

// instance.get('/db.json').
//     then(response=>{
//         const data = response
//         console.log(data)
//     })
const config = {
    url:'/db.json',
    method:'get'
    
}

export default {
    getList(){
        return instance(config)
    }
}