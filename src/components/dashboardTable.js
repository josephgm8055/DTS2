import React, { Component } from 'react';
 
class DashboardTable extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() { 
        return (
            <div style={{width:'80%',marginLeft:'10%',paddingBottom:30,paddingTop:30}}>
                <table className='table table-bordered table-hover text-center' style={{borderRadius:30}}>
                    <thead class="thead-dark">
                        <tr>
                            <th>Statuses</th>
                            <th>Status Tally</th>
                            <th>Statuses</th>
                            <th>Status Tally</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Not Started</td>
                            <td>2</td>
                            <td>Low</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>In Progress</td>
                            <td>4</td>
                            <td>Medium</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Closed</td>
                            <td>8</td>
                            <td>High</td>
                            <td>2</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}
 
export default DashboardTable;