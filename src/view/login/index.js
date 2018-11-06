import React, { Component } from 'react';
import './index.css';
import { login } from '../../api/index'
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tel: '',
            password: ''
        }
    }
    componentDidMount() {

    }
    // 电话号码和密码赋值
    setUserInfo(event, key) {
        let obj = {};
        obj[key] = event.target.value;
        this.setState(obj);
    }
    // 登录
    submitLogin() {
        // FormData
        let param = new FormData();
        param.append('tel', this.state.tel);
        param.append('password', this.state.password);
        // 登录开始请求
        login(param).then(res => {
            // 路由跳转
            // var list = {token: res.data.token};
            // let path = {
            //     pathname: '/index',
            //     query: list,
            // }
            // this.props.history.push(path)
            let userInfo = {
                token: res.data.token
            }
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
            this.props.history.push('/index');
            ;
        }).catch(function (error) {
            console.log(error);
            // 异常提示
            alert(error);
        });
    }
    render() {
        return (
            <div className="login-bg">
                <div className="chat-login">
                    <div className="login-box">
                        <div className="logo"></div>
                        <div className="phone-box">
                            <span className="tit">
                                中国+86
                      <i></i>
                            </span>
                            <input type="tel" name="tel" placeholder="手机号" className="inp-txt" onChange={(e) => { this.setUserInfo(e, "tel") }} ></input>
                        </div>
                        <div className="psd-box">
                            <input type="password" name="password" onChange={(e) => { this.setUserInfo(e, "password") }} placeholder="密码" className="inp-txt" />
                        </div>
                        <input type="submit" className="login-btn" onClick={() => { this.submitLogin() }} value="登录" />
                    </div>
                </div>
            </div>

        )
    }

}
