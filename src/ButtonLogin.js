import React, { Component } from 'react';
import './login.css'
class Logins extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName:'',
            password:''
         }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this)
    }
    handleSubmit(){
        alert(this.state.userName+this.state.password)
    }
    handleChange(name,e){
        this.setState({ 
            [name]:e.target.value
        });
    }
    render() { 
        return ( 
            <div id="index_bg" content="bodyMark">
                <div className="login"><div className="login_c">
                    <span></span>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="用户名/通行证" className="form-control" value={this.state.userName} 
                            onChange={this.handleChange.bind(this,"userName")}/>
                        <input type="password" placeholder="密码" className="form-control" value={this.state.password} 
                            onChange={this.handleChange.bind(this,"password")} />
                        <button type="submt">登录</button>
                        <p><label><input type="checkbox"/>记住密码</label><a href="#">忘了密码？</a></p>
                    </form>
                </div></div>
                <div className="footer">版权所有 &copy 2019</div>
            </div>
         );
    }
}
 
export default Logins;