import React, { Component } from 'react';
import './index.css';
import { chatroom } from '../../api/index'
export default class Home extends Component {
    constructor(props, context) {
        super(props, context)
        // 获取路由传递的值
        console.log(props);
        this.state = {
            userInfo: JSON.parse(sessionStorage.getItem('userInfo')) || '',
            chatList: [],// 房间列表数据
        }
    }
    componentDidMount() {
        // 获取房间  
        this.getChatRoom();
    }
    /* * 数据请求 * */
    // 获取房间列表
    getChatRoom() {
        chatroom(this.state.userInfo.token).then(res => {
            const chatList = res.data;
            // 赋值html渲染数据            
            this.setState({
                chatList: chatList
            });
        });
    }
    /* * 业务处理 * */
    
    // 跳转到聊天室
    routerTo(e){
      this.props.history.push({pathname: `/chat/`,search:e})
    }
    render() {
        return (
            <div className="home-page">
                {/* home-left */}
                <div className="home-left">
                    <div className="logo">
                        <i></i>
                        <p>陪玩管理系统</p>
                    </div>
                    <div className="left-menu">
                        {/* <a href="javascript:;" title="" className="my-home active" data-index="0">我的大厅</a>
                        <a href="javascript:;" title="" className="my-voice" data-index="1">声卡设置</a>
                        <a href="javascript:;" title="" className="my-discount" data-index="2">消费折扣设置</a> */}
                    </div>
                </div>
                {/* home-right */}
                <div className="home-right">
                    <div className="right-main" style={{ display: 'block' }}>
                        <div className="home-title">大厅列表</div>
                        <div className="right-content">
                            <div className="room-main">
                                {/* 房间列表渲染 */}
                                {
                                    this.state.chatList.map(ele =>
                                        <div className="text-box" onClick={()=>{this.routerTo(ele.id)}} key={ele.id}>
                                            <p className="name">
                                                <b>{ele.chatroom_type_name}</b>
                                                <span>{ele.name}</span>
                                            </p>
                                            <p className="room-id">ID：{ele.id}</p>
                                            <p className="notice-tit">房间公告</p>
                                            <p className="notice">{ele.announcement}</p>
                                            <span title="" className="into-room">进入大厅</span>
                                        </div>
                                    )
                                }
                                {/* 房间列表渲染 */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}
