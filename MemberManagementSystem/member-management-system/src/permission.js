import router from '@/router'
import {getUserInfo} from './api/login'

router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    const token = localStorage.getItem('msm-token')
    //didn't get the token
    if(!token) {
        console.log("you don't have token")
        // all lead to '/login' page
        if(to.path !== '/login'){
            next({path: '/login'})
        }else {
            next()
        }
    }
    //get the token 
    else{
        console.log("you have token")
        if(to.path === '/login'){
            next()
        }else{
            const userInfo = localStorage.getItem('msm-accountObj')
            if(userInfo){
                next()
            }
            else{
                console.log("you don't have userInfo")
                getUserInfo(token).then(response =>{
                    const resp = response.data
                    if(resp.flag){
                        console.log("already save")
                        localStorage.setItem('msm-accountObj',JSON.stringify(resp.data))
                        next()
                    }
                })
            }
        }
            
    }
})
