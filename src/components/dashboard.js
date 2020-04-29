import React, { Component } from 'react';
import NavBar from './navbar'
import MenuBar from './menubar'
import LineChart from './mychart'
import PieChart from './piechart'
import DashboardTable from './dashboardTable'
import Card from './card'
import CardBig from './cardBig'
import StatusChart from './statusChart'
import TeamChart from './teamChart'
import WeeklyChart from './weeklyChart'
import TopBugFixers from './topBugFixers'
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
                <div style={{ backgroundColor: '#E7E7FF',display:'flex',justifyContent:'space-around' ,paddingTop:30, flexWrap:'wrap'}}>

                    <Card >
                        <PieChart/>
                    </Card>
                    <Card >
                        <StatusChart/>
                    </Card>
                    <Card >
                        <TeamChart/>
                    </Card>
                    <Card >
                        <TopBugFixers/>
                    </Card>
                    <CardBig>
                        <LineChart/>
                    </CardBig>
                    <CardBig>
                        <WeeklyChart/>
                    </CardBig>
                    <div style={{backgroundColor:'white',borderRadius:15,width:'80%',height:'40vh',marginBottom:30,boxShadow:'3px 3px 8px gray'}}>
                    <DashboardTable />
                    </div>
                    
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