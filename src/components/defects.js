import React, { Component } from 'react';
import NavBar from './navbar'
import MenuBar from './menubar'
import DefectsTable from './defectsTable'
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
                <DefectsTable/>
            </div>
        );
    }
}
 
export default Defects;