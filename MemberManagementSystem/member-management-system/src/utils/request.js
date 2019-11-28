import axios from 'axios'
import { Loading, Message } from 'element-ui'

const instance = axios.create({
  baseURL: process.env.VUE_APP_SERVER_URL,
  timeout: 1000,

});

const options = {
  text: 'test',
  target: '.main',
  text: "拼命加载中",
  spinner: "el-icon-loading",
  background: "rgba(0, 0, 0, 0.8)"
}

const loading = {
  loadingInstance: null,
  // open loading
  open: function (){
    if(this.loadingInstance === null){
      this.loadingInstance = Loading.service(options)
    }
  },
  // close loading
  close: function(){
    if(this.loadingInstance !== null){
      this.loadingInstance.close()
    }
    this.loadingInstance = null
  }
}




// Add a request interceptor
instance.interceptors.request.use(function (config) {
  // Do something before request is sent
  loading.open()
  return config;
}, function (error) {
  // Do something with request error
  loading.close();
  return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  loading.close();
  //report wrong request
  if(response.data.code !== 2000){
    Message({
      message: response.data.message || '系统异常',
      type: 'warning',
      duration: 5000,
    })
  }
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
export default instance