import axios from 'axios'
import qs from 'qs'
import { getToken } from '@/common/services/token'
// import router from '@/router';

export const service = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 2000000,
})

// 请求拦截
service.interceptors.request.use(
  config => {
    const axiosConfig = config
    // 设置请求头
    if (getToken()) {
      axiosConfig.headers.common.Authorization = `Token ${getToken()}`
    }
    return axiosConfig
  },
  error => Promise.reject(error)
)

// 请求拦截
service.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => Promise.reject(error)
)

/* axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL;
axios.defaults.timeout = 2000000;
axios.interceptors.response.use((response) => {
  if (typeof response.data === 'object' && response.data.code === 401) {
    const { href } = router.resolve({
      path: '/login',
      query: {
        redirect: encodeURIComponent(window.location.href),
      },
    });
    const referer = `${window.location.origin}${href}`;
    window.location.href = `${process.env.VUE_APP_API_BASE_URL}/auth/loginpage?referer=${encodeURIComponent(referer)}`;
    throw new Error('401');
  }
  return response;
}); */

const ApiService = {
  query(resource, config) {
    return service.get(resource, config).catch(error => {
      throw new Error(`[VUE2-APP] ApiService ${error}`)
    })
  },

  get(resource, slug = '') {
    return service.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[VUE2-APP] ApiService ${error}`)
    })
  },

  post(resource, data, config) {
    return service.post(`${resource}`, qs.stringify(data, { indices: false }), {
      ...config,
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
    })
  },

  /* post(resource, config) {
    return service.post(`${resource}`, config);
  }, */

  update(resource, slug, data) {
    return service.put(`${resource}/${slug}`, data, {})
  },

  put(resource, config) {
    return service.put(`${resource}`, config)
  },

  del(resource, slug, data) {
    return service.delete(`${resource}/${slug}`, {
      data,
    })
  },

  delete(resource) {
    return service.delete(resource).catch(error => {
      throw new Error(`[VUE2-APP] ApiService ${error}`)
    })
  },
}

export default ApiService
