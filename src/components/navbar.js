import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class navBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }
    render() {
        return (
            <nav class="navbar navbar-expand-md navbar-dark bg-dark navbar-inverse bg-inverse"  >
                <a class="navbar-brand" href="#">Defect Tracking System</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="collapsibleNavbar" >
                    <ul class="navbar-nav " >
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                                Projects
      </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Project 1</a>
                                <a class="dropdown-item" href="#">Project 2</a>
                                <a class="dropdown-item" href="#">Project 3</a>
                            </div>
                        </li>

                    </ul>
                    <ul class="navbar-nav">
                        <div class="dropdown">


                            <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Joseph</button>


                            <div class="dropdown-menu dropdown-dark">
                                <a class="dropdown-item" href="#">View Profile</a>
                                <a class="dropdown-item" href="#">Update Profile</a>
                                <Link to="/">
                                <a class="dropdown-item">Logout</a>
                                </Link>
                            </div>
                        </div>
                        <li class="nav-item">
                            <a class="nav-item nav-link" href="#"><span className="fa fa-question-circle" style={{ marginRight: 5 }}></span>Help</a>
                        </li>

                    </ul>


                </div>
            </nav>
        );
    }
}

export default navBar;