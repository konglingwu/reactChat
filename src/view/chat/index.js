import React, { Component } from 'react';
import './index.css';
export default class chat extends Component {
    constructor(props, context) {
        super(props, context)
        console.log(props)
        let id = this.props.location.search; // 房间id
        this.state ={
           charoomId:id.substring(1)
        }
        console.log(this.state.charoomId);
    }
    render() {
        return (
            <div>聊天室</div>
        )
    }
}