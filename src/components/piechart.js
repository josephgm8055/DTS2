import React from 'react';
import FullOption from 'react-minimal-pie-chart';
const PieChart1 = () => {
    return (
        <div style={{ marginTop: 10, width: '80%',height:'90%' }}>
            <span style={{ marginLeft: 90, fontWeight: 800, fontSize: 15, color: '#484662' }}>PRIORITY TALLIES</span>
            <FullOption
                data={[
                    {
                        color: '#AEF35F',
                        title: 'Low Priority',
                        value: 10
                    },
                    {
                        color: '#F3DF5F',
                        title: 'Medium Priority',
                        value: 15
                    },
                    {
                        color: '#F3835F',
                        title: 'High Priority',
                        value: 20
                    }
                ]}
                animate={true}
                label
                labelPosition={50}
                labelStyle={{
                    fill: '#fff',
                    fontFamily: 'sans-serif',
                    fontSize: '10px',

                }}

                paddingAngle='2'
                style={{ width: '80%',marginLeft:50 }} />
            <div style={{display:'flex',margin:'20px 30px'}}>
                <div style={{marginRight:20,display:'flex',alignItems:'center'}}>
                    <span style={{ width: 15, height: 15, backgroundColor: '#AEF35F', border: '1px solid #AEF35F', display: 'inline-block', marginRight: 10 }}></span>
                    <span>Low</span>
                </div>
                <div style={{marginRight:20,display:'flex',alignItems:'center'}}>
                    <span style={{ width: 15, height: 15, backgroundColor: '#F3DF5F', border: '1px solid #F3DF5F', display: 'inline-block', marginRight: 10 }}></span>
                    <span>Medium</span>
                </div>
                <div style={{marginRight:20,display:'flex',alignItems:'center'}}>
                    <span style={{ width: 15, height: 15, backgroundColor: '#F3835F', border: '1px solid #F3835F', display: 'inline-block', marginRight: 10 }}></span>
                    <span>High</span>
                </div>
            </div>
        </div>
    );
}

export default PieChart1;