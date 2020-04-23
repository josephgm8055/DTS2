import React, { Component } from 'react';
import logo from '../logo.jpg';
import './style.css';
import { Link } from 'react-router-dom'
class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    selectedMenu() {
        switch (this.props.selected) {
            case 'dash':
                return (
                    <span className="menugroup" style={{ float: 'right' }}>
                        <Link to="/dashboard">
                            <a className='active'>Dashboard</a>
                        </Link>
                        <Link to="/release">
                            <a >Release</a>
                        </Link>
                        <Link to="/defects">
                            <a >Defects</a>
                        </Link>
                    </span>
                )
                break;
            case 'release':
                return (
                    <span className="menugroup" style={{ float: 'right' }}>
                        <Link to="/dashboard">
                            <a >Dashboard</a>
                        </Link>
                        <Link to="/release">
                            <a className='active'>Release</a>
                        </Link>
                        <Link to="/defects">
                            <a >Defects</a>
                        </Link>
                    </span>
                )
                break;
            case 'defects':
                return (
                    <span className="menugroup" style={{ float: 'right' }}>
                        <Link to="/dashboard">
                            <a >Dashboard</a>
                        </Link>
                        <Link to="/release">
                            <a >Release</a>
                        </Link>
                        <Link to="/defects">
                            <a className='active'>Defects</a>
                        </Link>
                    </span>
                )
                break;

        }
    }
    render() {
        return (
            <div>
                <div style={{ disply: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '11vh', backgroundColor: '#DBDBE1', alignItems: 'center' }}>
                    <img className="menuImage" src={logo} style={{ maxHeight: '100%', width: 280 }}></img>
                    {this.selectedMenu()}

                </div>
            </div>
        );
    }
}

export default MenuBar;