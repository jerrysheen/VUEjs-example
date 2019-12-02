const TOKEN_KEY = 'msm-token'
const USER_LOGIN_KEY = 'msm-accountObj'
const USER_KEY = 'msm-accountInfo '

export function getToken(){
    return localStorage.getItem(TOKEN_KEY)
}

export function setToken(token){
    return localStorage.setItem(TOKEN_KEY, token)
}

export function getUser(){
    return JSON.parse(localStorage.getItem(USER_KEY))
}

export function setUser(user){
    localStorage.setItem(USER_LOGIN_KEY, JSON.stringify(user))
}
//operate user infor (name id role)
export function getUserProfile(){
    return JSON.parse(localStorage.getItem(USER_KEY))
}

export function setUserProfile(user){
    localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function removeToken(){
    localStorage.removeItem(TOKEN_KEY)
    localStorage.removeItem(USER_LOGIN_KEY)
    localStorage.removeItem(USER_KEY)
}