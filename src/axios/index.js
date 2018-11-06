import axios from 'axios'
// request拦截器
axios.interceptors.request.use(
    config => {
        console.log('请求开始')
        // 全屏Loading开始
        return config
    },
    error => {
        // Do something with request error
        console.log(error) // for debug
        Promise.reject(error)
    }
)

// respone拦截器
axios.interceptors.response.use(
    response => {
        const res = response.data;
        console.log(res,'res');
        // 系统级错误
        if (res.code !== 200) {
            return Promise.reject(res.msg)
        }else{
            return res;  
        }
    },
    error => {
        if (error.message !== 'USERCANCEL') {
        }
        return Promise.reject(error)
    }

)
// 自定义 处理 返回信息
export function custom(config) {
    const params = {}
    return axios({
      method: config.method,
      url: config.url,
      data: params,
      responseType: 'arraybuffer',
      baseURL: '/be/', // api的base_url  //需要修改的
      timeout: 30000,
      headers: {
        accept: 'application/json'
      }
    })
  
  }
  
  // 统一请教模版
  export function fetch(config) {
    const params = config.params
    return axios({
      method: config.method,
      url: config.url,
      data: params,
      //baseURL: 'https://beta.api.pickdoki.com/', // api的base_url //需要修改的
      timeout: config.timeout ? config.timeout : 30000,
      headers: {
        accept: 'application/json'
      },
      cancelToken: config.cancelToken
    })
  }