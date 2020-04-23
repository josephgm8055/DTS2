import React, { Component } from 'react';
import NavBar from './navbar'
import MenuBar from './menubar'
class Defects extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
                <NavBar/>
                <MenuBar selected="defects"/>
            </div>
        );
    }
}
 
export default Defects;