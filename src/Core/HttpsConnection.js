import Axios from 'axios';

const apiUrl = "https://fakestoreapi.com";

const axiosInstance = Axios.create({
    baseURL: apiUrl,
    // withCredentials: true,
  })
  
  axiosInstance.interceptors.request.use(
    (config) => {
      // config.headers.Authorization = `Bearer Nq4GwJnSfCOPc8EIwDLfQhCvxDHLAA7PK1Dg3N85N5Ezidwtgx0Z`
      return config
    },
    (err) => Promise.reject(err)
  )
  
  axiosInstance.interceptors.response.use(
    (response) => {
      return Promise.resolve(response)
    },
    (err) => Promise.reject(err)
  )
  
export default axiosInstance;

export function ApiGet(apiEndpoint, timeout=20000){
    apiEndpoint = apiUrl + apiEndpoint;
    return axiosInstance({
        method: 'GET',
        url: apiEndpoint,
        baseUrl: apiUrl,
        timeout: timeout
    })
}

export function ApiPost(apiEndpoint, apiData, timeout=20000){
    apiEndpoint = apiUrl + apiEndpoint;
    return axiosInstance({
        method: 'POST',
        url: apiEndpoint,
        baseUrl: apiUrl,
        data: apiData,
        timeout: timeout
    })
}