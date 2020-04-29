import React, { Component } from 'react';

class RightBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div style={{ width: '35%', height: '71vh', overflow: 'scroll',backgroundColor:'rgb(231, 231, 255)'}}>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>OWNER</span>
                    <div>
                        <select className='form-control' value={this.props.defect.owner}  style={{width:'98%',marginLeft:'1%'}}>
                            <option>Reenu Celine</option>
                            <option>Joseph</option>
                            <option>Glassan Tom</option>
                            <option>Koamala N</option>
                            <option>Ramana Basu</option>
                            <option>Sreeni</option>

                        </select>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>TEAM</span>
                    <div>
                        <select className='form-control' value={this.props.defect.team}  style={{width:'98%',marginLeft:'1%'}}>
                            <option>Rangers</option>
                            <option>Scropions</option>
                            <option>Test Team</option>
                            <option>Test Team 2</option>
                        </select>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>STATE</span>
                    <div>
                        <select className='form-control' value={this.props.defect.state}  style={{width:'98%',marginLeft:'1%'}}>
                            <option>Open</option>
                            <option>In Progress</option>
                            <option>Fixed</option>
                            <option>Verified</option>
                            <option>Closed</option>
                            <option>Cannot Reproduce</option>

                        </select>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>PRIORITY</span>
                    <div>
                        <select className='form-control' value={this.props.defect.priority}  style={{width:'98%',marginLeft:'1%'}}>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>SEVERITY</span>
                    <div>
                        <select className='form-control' value={this.props.defect.severity}  style={{width:'98%',marginLeft:'1%'}}>
                            <option>Urgent</option>
                            <option>Serious</option>
                            <option>Minor</option>
                            <option>Cosmetic</option>
                            

                        </select>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>ENVIRONEMNT</span>
                    <div>
                        <select className='form-control' value={this.props.defect.environemnt}  style={{width:'98%',marginLeft:'1%'}}>
                            <option>Development</option>
                            <option>QA</option>
                            <option>Stage</option>
                            <option>Production</option>
                        </select>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>SUBMITTED</span>
                    <div>
                        <input style={{width:'98%',marginLeft:'1%'}} value={this.props.defect.submitted} disabled></input>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>CREATED DATE</span>
                    <div>
                        <input style={{width:'98%',marginLeft:'1%'}} value={this.props.defect.doc} disabled></input>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>CLOSED DATE</span>
                    <div>
                        <input style={{width:'98%',marginLeft:'1%'}} value={this.props.defect.closed_date} disabled></input>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>FOUND IN BUILD</span>
                    <div>
                        <input style={{width:'98%',marginLeft:'1%'}} value={this.props.defect.found_build} ></input>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>FIXED IN BUILD</span>
                    <div>
                        <input style={{width:'98%',marginLeft:'1%'}} value={this.props.defect.fixed_build} ></input>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>VERIFIED IN BUILD</span>
                    <div>
                        <input style={{width:'98%',marginLeft:'1%'}} value={this.props.defect.verified_build} ></input>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>RESOLUTION</span>
                    <div>
                        <select className='form-control' value={this.props.defect.Resolution}  style={{width:'98%',marginLeft:'1%'}}>
                            <option>None</option>
                            <option>Architecture</option>
                            <option>Code Change</option>
                            <option>Configuration Change</option>
                            <option>Database Change</option>
                            <option>Duplicate</option>
                            <option>Not reproducible</option>
                            <option>Not a Defect</option>
                        </select>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>Estimation(Hours)</span>
                    <div>
                        <input type="number" style={{width:'98%',marginLeft:'1%'}} value={this.props.defect.estimation} ></input>
                    </div>

                </div>
                <div className="items" style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{marginLeft:'1%',fontSize:16,fontWeight:600}}>TARGET DATE</span>
                    <div>
                        <input style={{width:'98%',marginLeft:'1%'}} value={this.props.defect.target_date} ></input>
                    </div>

                </div>
            </div>
        );
    }
}

export default RightBar;