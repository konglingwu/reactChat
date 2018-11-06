import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../view/login/index';
import Home from '../view/home/index';
import Chat from '../view/chat/index';
class RouterView extends Component {
    render() {
        return (
            <Switch>
                <Route path='/' exact render={() => (//exact是用于精准匹配，这里是定义了路由重定向，意思是当我们进入"/"时会重定向到“/index”
                    <Redirect to='/login' />
                )} />
                <Route path='/index' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/chat' component={Chat}/>
            </Switch>
        )
    }
}
export default RouterView