import {fetch} from '../axios/index'

// 登录
export function login(query) {
  return fetch({
    url: `api-user/web/user/login`,
    method: 'POST',
    params: query
  })
}