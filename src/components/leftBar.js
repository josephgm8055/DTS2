import React, { Component } from 'react';
import ReactFileReader from 'react-file-reader'
class LeftBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    AttachementReturn = () => {

        var arr = this.props.attachments.map(e => {
            return (
                <tr>
                    <td>{e.name}</td>
                    <td>{e.date}</td>
                    <td>{e.owner}</td>
                </tr>
            )
        })
        return (arr)
    }
    render() {
        return (
            <div className="leftDiv" style={{ width: '65%', height: '67vh', backgroundColor: 'rgb(231, 231, 255)', overflow: 'scroll' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{marginLeft:'1%' ,fontSize:20,fontWeight:600}}>Status</span>
                    <div style={{ display: 'flex', flexDirection: 'row',alignItems:'center',margin:'0px 10px' }}>
                        <div className="text-center" style={{ width: 100, border: 'solid 1px black', height:35,paddingTop:4,marginRight:10,borderRadius:10 }}>
                            <i style={{ paddingRight: 5 }} class="fa fa-check-circle-o" aria-hidden="true"></i>
                            <span>Ready</span> 
                        </div>
                        <div className="text-center" style={{ width: 100, border: 'solid 1px black', height:35,paddingTop:4 ,borderRadius:10 }}>
                            <i style={{ paddingRight: 5 }} class="fa fa-ban" aria-hidden="true"></i>
                            <span>Blocked</span> 
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:20,fontWeight:600}}>Description</span>
                    <div>
                        <textarea className='MyTextArea' style={{ width: '98%', marginLeft: '1%' }} rows="15" value={this.props.defect.desc}></textarea>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:20,fontWeight:600}}>ATTACHMENTS</span>
                    <div >
                        <table style={{ width: '98%',marginLeft:'1%' }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>When</th>
                                    <th>Owner</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.AttachementReturn()}
                            </tbody>
                        </table>
                        <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.png'}>
                            
                            <button className='btn' style={{ borderRadius: 10,border:'solid 1px black',width:'98%',marginLeft:'1%'}}><i style={{padding:'0px 10px'}} className='fa fa-plus'></i>Click to add Document</button>
                        </ReactFileReader>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:20,fontWeight:600}}>Notes</span>
                    <div>
                        <textarea className='MyTextArea' style={{ width: '98%', marginLeft: '1%' }} rows="15" value={this.props.defect.notes}></textarea>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:20,fontWeight:600}}>Build And Deploy Instructions</span>
                    <div>
                        <textarea className='MyTextArea' style={{ width: '98%', marginLeft: '1%' }} rows="15" value={this.props.defect.build_deploy}></textarea>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:20,fontWeight:600}}>Customer</span>
                    <div>
                        <textarea className='MyTextArea'  style={{ width: '98%', marginLeft: '1%' }} rows="15" value={this.props.defect.cutomer_comments}></textarea>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:20,fontWeight:600}}>Review Minutes</span>
                    <div>
                        <textarea className='MyTextArea'  style={{ width: '98%', marginLeft: '1%' }} rows="15" value={this.props.defect.review_minutes}></textarea>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:20,fontWeight:600}}>Review Team</span>
                    <div>
                        <textarea className='MyTextArea'  style={{ width: '98%', marginLeft: '1%' }} rows="15" value={this.props.defect.review_team}></textarea>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:20,fontWeight:600}}>Root Couse Description</span>
                    <div>
                        <textarea className='MyTextArea'  style={{ width: '98%', marginLeft: '1%' }} rows="15" value={this.props.defect.root_cause_description}></textarea>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:20,fontWeight:600}}>Work Around Description</span>
                    <div>
                        <textarea className='MyTextArea'  style={{ width: '98%', marginLeft: '1%' }} rows="15" value={this.props.defect.workaround_description}></textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default LeftBar;