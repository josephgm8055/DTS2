import React from 'react'
import { Chart } from 'react-charts'
function LineChart() {
    const data = React.useMemo(
      () => [
        {
          label: 'Total',
          data: [{ x: '20-04-2020', y: 30 }, { x: '21-04-2020', y: 20 }, { x: '22-04-2020', y: 10 }]
        },
        {
          label: 'Open Defects',
          data: [{ x: '20-04-2020', y: 10 }, { x: '21-04-2020', y: 30 }, { x: '22-04-2020', y: 10 }]
        },
        {
          label: 'New Defects',
          data: [{ x: '20-04-2020', y: 10 }, { x: '21-04-2020', y: 15 }, { x: '22-04-2020', y: 10 }]
        },
        {
            label: 'Resolved Defects',
            data: [{ x: '20-04-2020', y: 10 }, { x: '21-04-2020', y: 70 }, { x: '22-04-2020', y: 10 }]
          }
      ],
      []
    )
   
    const axes = React.useMemo(
      () => [
        { primary: true, type: 'ordinal', position: 'bottom' },
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
        <Chart data={data} axes={axes}  tooltip/>
        
      </div>
    )
  }
  export default LineChart