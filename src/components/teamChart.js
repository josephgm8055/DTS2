import React from 'react';
import FullOption from 'react-minimal-pie-chart';
const TeamChart = () => {
    return (
        <div style={{ marginTop: 10, width: '80%', height: '90%' }}>
            <span style={{ marginLeft: 90, fontWeight: 800, fontSize: 15, color: '#484662' }}>TEAMS TALLIES</span>
            <FullOption
                data={[



                    {
                        color: '#60DFFB',
                        title: 'Rangers',
                        value: 100
                    },
                    {
                        color: '#97E9A3',
                        title: 'Scropions',
                        value: 74
                    },
                    {
                        color: '#ECBDF3',
                        title: 'SQ3',
                        value: 56
                    },
                    {
                        color: '#BCBBDF',
                        title: 'TCOE',
                        value: 90
                    },
                ]}
                animate={true}
                
                lineWidth={60}
                labelPosition={50}
                labelStyle={{
                    fill: '#fff',
                    fontFamily: 'sans-serif',
                    fontSize: '10px',

                }}

                
                style={{ width: '80%', marginLeft: 50 }} />
            <div style={{ display: 'flex', margin: '20px 30px' }}>
                <div style={{ display: 'flex', flexDirection: 'column',marginRight: 20 }}>
                    <div style={{ marginRight: 20, display: 'flex', alignItems: 'center' }}>
                        <span style={{ width: 100}}>Total Teams</span>
                    </div>
                    <div style={{ marginRight: 20, display: 'flex', alignItems: 'center' }}>
                        
                        <span style={{ width: 100,paddingLeft:30}}>4</span>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginRight: 20, display: 'flex', alignItems: 'center' }}>
                        
                        <span style={{ width: 100}}>Total Defects</span>
                    </div>
                    <div style={{ marginRight: 20, display: 'flex', alignItems: 'center' }}>
                        
                        <span style={{ width: 100,paddingLeft:30}}>320</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TeamChart;