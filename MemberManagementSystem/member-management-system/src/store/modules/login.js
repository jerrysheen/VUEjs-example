import { login, getUserInfo } from '@/api/login.js'
import { setToken, setUser, setUserProfile, getUserProfile } from '@/utils/auth.js'



export default {
  state: {
    id: '',
    name: '',
    role: ''
  },
  mutations: {
    login(state, payload) {
      state.id = payload.id
      state.name = payload.name
      state.role = payload.role
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
                setUserProfile(response.data.data)
                console.log("this is payload we sent", response.data.data)
                resolve(response.data.data)
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
    getName:(state)=>{
      if(state.name === ''){
        const data = getUserProfile()
        state.id = data.id
        state.name = data.name
        state.role = data.role
      }
      return state.name
    }
      
  }
}