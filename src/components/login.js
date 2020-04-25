import React, { Component } from 'react';
import './login.css'
import bg1 from '../images/loginbg.png'
import dts from '../images/dts2.png'
import { Link } from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uname: '',
            pword: ''
        };
    }
    updateUsername = (e) => {
        this.setState({
            uname: e.target.value
        })
    }
    updatePassord = (e) => {
        this.setState({
            pword: e.target.value
        })
    }
    checkLogin = (e) => {
        e.preventDefault()
        var data = {
            uname: this.state.uname,
            pword: this.state.pword
        }
        fetch(`http://localhost:2020/login`, {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(data)
        }).then((resp) => resp.text())
            .then((res) => {
                if (res == 'success') this.props.history.push(`/dashboard`);
                console.log(res)
                console.log(this.props)


            }).catch((error) => {
                console.log(error)
            });;

    }
    render() {
        return (
            <div className="back" >
                <div class="container" styles={{ backgroundImage: `url(${bg1})` }}>
                    <div class="card card-login mx-auto text-center bg-dark">
                        <div class="card-header mx-auto bg-dark">
                            <span> <img src={dts} class="w-75" alt="Logo" /> </span><br />
                            <span class="logo_title mt-5"> Login Dashboard </span>


                        </div>
                        <div class="card-body">
                            <form onSubmit={(e) => this.checkLogin(e)}>
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-user"></
                                        i></span>
                                    </div>
                                    <input onChange={(e) => this.updateUsername(e)} type="text" name="username" class="form-control" placeholder="Username" value={this.state.uname} />
                                </div>

                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-key"></i></span>
                                    </div>
                                    <input type="password" name="password" class="form-control" placeholder="Password" value={this.state.pword} onChange={(e) => this.updatePassord(e)} />
                                </div>

                                <div class="form-group">

                                    <input type="submit" name="btn" value="Login" class="btn btn-outline-danger float-right login_btn" />

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;