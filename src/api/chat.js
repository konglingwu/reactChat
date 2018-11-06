import {fetch} from '../axios/index'

// 获取房间列表
export function chatroom(query) {
  return fetch({
    url: `api-user/web/chatroom/list?token=${query}`,
    method: 'GET'
  })
}