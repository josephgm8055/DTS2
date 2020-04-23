import React, { Component } from 'react';
import './login.css'
import bg1 from '../images/loginbg.png'
import dts from '../images/dts2.png'
import { Link } from 'react-router-dom'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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
                            <form action="" method="post">
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-user"></i></span>
                                    </div>
                                    <input type="text" name="email" class="form-control" placeholder="Username" />
                                </div>

                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fa fa-key"></i></span>
                                    </div>
                                    <input type="password" name="password" class="form-control" placeholder="Password" />
                                </div>

                                <div class="form-group">
                                <Link to='/dashboard'>
                                    <input type="submit" name="btn" value="Login" class="btn btn-outline-danger float-right login_btn" />
                                </Link>
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