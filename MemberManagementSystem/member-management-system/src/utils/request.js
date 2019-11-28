import axios from 'axios'
import { Loading } from 'element-ui' 

const instance = axios.create({
    baseURL: process.env.VUE_APP_SERVER_URL,
    timeout: 1000,
    
  });
  
const options = {
  text: 'test' 
}  


    // Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    Loading.service(options);
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });
export default instance