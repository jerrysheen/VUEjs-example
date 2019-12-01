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
              //console.log(state)
            })
        })

    }
  },

  getters: {
  }
}