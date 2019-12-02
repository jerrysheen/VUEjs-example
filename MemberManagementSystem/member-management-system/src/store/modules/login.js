import { login, getUserInfo } from '@/api/login.js'
import { setToken, setUser } from '@/utils/auth.js'



export default {
  state: {
    id: '',
    name: '',
    roll: ''
  },
  mutations: {
    login(state, payload) {
      state = { ...payload }
    },
    logOut() {
      state = {}
    }

  },

  actions: {
    loginPage({ commit }, form) {
      console.log(form)
      //封装一个promise
      return new Promise((resolve, reject)=>{
        login(form.account, form.password)
          .then((response) => {
            const token = response.data.value.data       // get token
            console.log("token", token)
            setToken(token)                  // use api to save token in localStorage
            setUser(form)                // save userInfo in localStorage
            console.log("save data done!")
            getUserInfo(token)                      //get user Information (id....) from backend and save
              .then((response) => {
                commit('login', response.data.data)
                resolve(response.data.data)
                console.log(response.data.data)
              })
              .catch(error =>{
                reject(error)
              })
          })
          .catch(error=>{
            reject(error)
          })
      })
    }
        
  },

  getters: {
  }
}