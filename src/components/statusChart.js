import React from 'react';
import FullOption from 'react-minimal-pie-chart';
const StatusChart = () => {
    return (
        <div style={{ marginTop: 10, width: '80%', height: '90%' }}>
            <span style={{ marginLeft: 100, fontWeight: 800, fontSize: 15, color: '#484662' }}>STATUS TALLIES</span>
            <FullOption
                data={[



                    {
                        color: '#F5CB9E',
                        title: 'Not Started',
                        value: 20
                    },
                    {
                        color: '#FBF660',
                        title: 'In Progress',
                        value: 15
                    },
                    {
                        color: '#60FBB5',
                        title: 'Fixed',
                        value: 15
                    },
                    {
                        color: '#93908B',
                        title: 'Closed',
                        value: 10
                    },
                ]}
                animate={true}
                label
                lineWidth={10}
                labelPosition={50}
                labelStyle={{
                    fill: '#fff',
                    fontFamily: 'sans-serif',
                    fontSize: '10px',

                }}

                paddingAngle='2'
                style={{ width: '80%', marginLeft: 50 }} />
            <div style={{ display: 'flex', margin: '20px 30px' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginRight: 20, display: 'flex', alignItems: 'center' }}>
                        <span style={{ width: 15, height: 15, backgroundColor: '#F5CB9E', border: '1px solid #F5CB9E', display: 'inline-block', marginRight: 10 }}></span>
                        <span style={{ width: 100}}>Not Started</span>
                    </div>
                    <div style={{ marginRight: 20, display: 'flex', alignItems: 'center' }}>
                        <span style={{ width: 15, height: 15, backgroundColor: '#FBF660', border: '1px solid #FBF660', display: 'inline-block', marginRight: 10 }}></span>
                        <span style={{ width: 100}}>In Progress</span>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ marginRight: 20, display: 'flex', alignItems: 'center' }}>
                        <span style={{ width: 15, height: 15, backgroundColor: '#60FBB5', border: '1px solid #60FBB5', display: 'inline-block', marginRight: 10 }}></span>
                        <span>Fixed</span>
                    </div>
                    <div style={{ marginRight: 20, display: 'flex', alignItems: 'center' }}>
                        <span style={{ width: 15, height: 15, backgroundColor: '#93908B', border: '1px solid #93908B', display: 'inline-block', marginRight: 10 }}></span>
                        <span>Closed</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatusChart;