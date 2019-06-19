import React, { Component } from 'react';
import './login.css'
class Logins extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            userName:'',
            password:'',
            checked:false
         }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
        this.handleCheck=this.handleCheck.bind(this)
    }
    handleSubmit(e){
        const userName=this.state.userName;
        const password=this.state.password;
        const checked=this.state.checked;
        if(!userName || !password){
            console.log("请输入")
        }else{            
            console.log(checked?userName+password+checked:userName+password)
        }
        e.preventDefault()
    }
    handleChange(name,e){
        this.setState({ 
            [name]:e.target.value
        });
    }
    handleCheck(e){
        this.setState({ 
            checked:e.target.checked
        });
    }
    render() { 
        return ( 
            <div id="index_bg" content="bodyMark">
                <div className="login"><div className="login_c">
                    <span>imgages</span>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="用户名/通行证" className="form-control" value={this.state.userName} 
                            onChange={this.handleChange.bind(this,"userName")}/>
                        <input type="password" placeholder="密码" className="form-control" value={this.state.password} 
                            onChange={this.handleChange.bind(this,"password")} />
                        <button type="submit">登录</button>
                        <p><label><input type="checkbox" onChange={this.handleCheck} checked={this.state.checked}/>记住密码</label><a href="#">忘了密码？</a></p>
                    </form>
                </div></div>
                <div className="footer">版权所有 &copy 2019</div>
            </div>
         );
    }
}
 
export default Logins;