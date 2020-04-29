import React, { Component,createRef } from 'react';
const $= require('jquery')
$.DataTable=require('datatables.net')
class DefectsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defects:[
                ['DE12345',1,2,'Unable to add custamizable data store in Dashboard and while user switching between application is breaking on hovering ','Ramana Basu','Reenu Celine','Open'],
                ['DE12346',3,2,'Unable to add custamizable data store in Dashboard','Komala N','Reenu Celine','Open'],
                ['DE12347',3,3,'Unable to add custamizable data store in Dashboard','Joseph George','Joseph George','Fixed'],
                ['DE12348',2,1,'Unable to add custamizable data store in Dashboard','Anvesh Anu','Reenu Celine','In Progress'],
                ['DE12349',1,1,'Unable to add custamizable data store in Dashboard','Ramana Basu','Joseph George','Closed'],
            ]
        };
        this.table=createRef()
    }
    componentDidMount(){
        this.$table=$(this.table.current)
        this.$table.DataTable({
            data:this.state.defects,
            columns:[
                {
                    title:'Defect ID',
                    render:(data,type,row)=>{
                        return(`<b>${data}</b>`)
                    }
                },
                {
                    title:'Priority',
                    render:(data,type,row)=>{
                        var str=''
                        switch(data){
                            case 1:
                                str=`<div style='border-radius:10px;width:80px;height:20px;background-color:#FF1D21;text-align:center;font-size:15px;color:#121269'><b>High</b></div>`
                                break;
                            case 2:
                                str=`<div style='border-radius:10px;width:80px;height:20px;background-color:#58EFF4;text-align:center;font-size:15px;color:#121269'><b>Medium</b></div>`
                                break;
                            case 3:
                                str=`<div style='border-radius:10px;width:80px;height:20px;background-color:#CFB4FA;text-align:center;font-size:15px;color:#121269'><b>Low</b></div>`
                                break;
                        }
                        return(str)
                    }
                },
                {
                    title:'Severity',
                    render:(data,type,row)=>{
                        var str=''
                        switch(data){
                            case 1:
                                str=`<div style='border-radius:10px;width:80px;height:20px;background-color:red;text-align:center;font-size:15px;color:#121269'><b>High</b></div>`
                                break;
                            case 2:
                                str=`<div style='border-radius:10px;width:80px;height:20px;background-color:orange;text-align:center;font-size:15px;color:#121269'><b>Medium</b></div>`
                                break;
                            case 3:
                                str=`<div style='border-radius:10px;width:80px;height:20px;background-color:yellow;text-align:center;font-size:15px;color:#121269'><b>Low</b></div>`
                                break;
                        }
                        return(str)
                    }
                },
                {
                    title:'Description',
                    render:(data,type,row)=>{
                        return(`<span style='font-weight:500'>${data}</span>`)
                    }
                },
                {
                    title:'Owner',
                    render:(data,type,row)=>{
                        return(`<span style='font-weight:600'>${data}</span>`)
                    }
                },
                {
                    title:'Submitted',
                    render:(data,type,row)=>{
                        return(`<span style='font-weight:600'>${data}</span>`)
                    }
                },
                {
                    title:'Status',
                    render:(data,type,row)=>{
                        var str=''
                        switch(data){
                            case 'Open':
                                str=`<div style='border-radius:10px;width:90px;height:20px;background-color:red;text-align:center;font-size:15px;color:#121269'><b>${data}</b></div>`
                                break;
                            case 'In Progress':
                                str=`<div style='border-radius:10px;width:90px;height:20px;background-color:orange;text-align:center;font-size:15px;color:#121269'><b>${data}</b></div>`
                                break;
                            case 'Fixed':
                                str=`<div style='border-radius:10px;width:90px;height:20px;background-color:yellow;text-align:center;font-size:15px;color:#121269'><b>${data}</b></div>`
                                break;
                            case 'Closed':
                                    str=`<div style='border-radius:10px;width:90px;height:20px;background-color:green;text-align:center;font-size:15px;color:#121269'><b>${data}</b></div>`
                                    break;
                        }
                        return(str)
                    }
                },
            ]
        })
    }
    render() { 
        return (
            <div>
                <table ref={this.table}></table>
            </div>
        );
    }
}
 
export default DefectsTable;