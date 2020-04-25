import React, { Component } from 'react';
import NavBar from './navbar'
import MenuBar from './menubar'
import LineChart from './mychart'
import PieChart from './piechart'
import DashboardTable from './dashboardTable'
import Card from './card'
import CardBig from './cardBig'
class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <NavBar />
                <MenuBar selected="dash" />
                <div style={{ backgroundColor: '#F5F5F8',display:'flex',justifyContent:'space-around' ,paddingTop:30, flexWrap:'wrap'}}>

                    <Card >
                        <PieChart/>
                    </Card>
                    <Card >
                        <PieChart/>
                    </Card>
                    <Card >
                        <PieChart/>
                    </Card>
                    <Card >
                        <PieChart/>
                    </Card>
                    <CardBig>
                        <LineChart/>
                    </CardBig>
                    <CardBig>
                        <LineChart/>
                    </CardBig>
                </div>


            </div>
        );
    }
}

export default Dashboard;


/*
 <div style={{ backgroundColor: '#F5F5F8', display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                    <LineChart />

                    <PieChart />



                </div>
                <div style={{ backgroundColor: '#F5F5F8', width: '100%'}}>
                    <DashboardTable />



                </div>
*/