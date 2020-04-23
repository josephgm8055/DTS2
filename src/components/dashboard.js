import React, { Component } from 'react';
import NavBar from './navbar'
import MenuBar from './menubar'
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
                <NavBar/>
                <MenuBar selected="dash"/>
                <div style={{backgroundColor:'#F5F5F8',height:'100vh'}}>

                </div>
            </div>
        );
    }
}
 
export default Dashboard;