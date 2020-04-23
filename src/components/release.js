import React, { Component } from 'react';
import NavBar from './navbar'
import MenuBar from './menubar'
class Release extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div>
                <NavBar/>
                <MenuBar selected="release"/>
            </div>
        );
    }
}
 
export default Release;