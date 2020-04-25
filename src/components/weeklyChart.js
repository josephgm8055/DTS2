import React from 'react'
import { Chart } from 'react-charts'
function WeeklyChart() {
    const data = React.useMemo(
      () => [
        {
          label: 'Defects Raised',
          data: [{x:'',y: 62 }]
        },
        {
          label: 'Defects Fixed',
          data: [{ x:'',y: 50 }]
        },
        {
          label: 'Defects Closed',
          data: [{x:'',y: 30 }]
        },
        {
            label: 'Resolved Defects',
            data: [{ x:'',y: 20 },]
          },
          
      ],
      []
    )
    const series = React.useMemo(
        () => ({
          type: 'bar'
        }),
        []
      )
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'ordinal',datum:'3', position: 'bottom' },
        { type: 'linear', position: 'left' }
        
      ],
      []
    )
   
    return (
      <div
        style={{
          width:'90%',
          height: '45vh',
          marginTop:30,
          marginLeft:30

        }}
      >
          <span style={{fontWeight: 800, fontSize: 22, color: '#484662' }}>Defects Day Count</span>
        <Chart data={data} axes={axes} series={series}  tooltip/>
        
      </div>
    )
  }
  export default WeeklyChart