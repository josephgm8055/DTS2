import React, { Component } from 'react';
import LeftBar from './leftBar'
import RightBar from './rightBar'
import NavBar from './navbar'
import MenuBar from './menubar'
import Discussion from './discussion'
import { Link, Redirect } from 'react-router-dom'
class DefectView extends Component {
    constructor(props) {
        super(props);
        var did = this.props.location.search.split('=')[1]
        //var did = this.props.match.params.did
        console.log(did)
        this.state = {
            view: 'details',
            did: did,
            defectDetails: { did: 'DE98765', title: 'Unable to add custamizable data store in Dashboard and while user switching between applicationr switching between application in Dashboard and while user switching between application is breaking on hovering', desc: 'steps to reproduce:\n1.Login to UI\n2.click on add button.\n3.verify the content\n\nActual result:color is Green\n\nExpected result:color should be black', status: 'Ready', Notes: '', build_deploy: '', cutomer_comments: '', review_minutes: 'jenkins id:196', review_team: 'Joseph,Reenu', root_cause_description: 'Code Error', workaround_description: '', owner: 'Reenu Celine', team: 'Scropions', state: 'Closed', environemnt: 'QA', estimation: '3', priority: 'High', severity: 'Minor', submitted: 'Reenu', doc: '13-12-1996', closed_date: '14-12-1996', found_build: 'test build', fixed_build: 'test build', verified_build: 'test build', Resolution: 'Code Change', target_date: '13-12-1997' },
            attachments: [
                { name: 'textdoc1.png', date: '13-12-1996', owner: 'Joseph' },
                { name: 'testdoc2.jpg', date: '12-11-1996', owner: 'Reenu' }
            ]
        };



    }
    componentDidMount() {
        const s = document.createElement('script')
        s.type = 'text/javascript';
        s.async = true;
        s.innerHTML = `
        ta=document.getElementById('description')
        auto_grow(ta)
        function auto_grow(element) {
            console.log('hai')
            element.style.height = "5px";
            element.style.height = (element.scrollHeight)+"px";
        }`
        document.body.appendChild(s);
        
    }
    setView=()=> {
        if (this.state.view == 'details') {
            return (
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <LeftBar defect={this.state.defectDetails} attachments={this.state.attachments} />
                    <RightBar defect={this.state.defectDetails} />
                </div>
            )
        }
        else{
            return(<Discussion />)
        }



        
    }
    changeView=()=>{
        if(this.state.view=='details'){
            this.setState({
                view:'discussion'
            })

        }
        else{
            this.setState({
                view:'details'
            })
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <MenuBar selected="defects" />
                <div className="DefectsMenu">

                    <div className={this.state.view=='details'?"defectmenuitem defectmenuactive col-md-6":"defectmenuitem col-md-6"} onClick={this.changeView}>
                        <i className="fa fa-file-text-o fa-2x" style={{ marginTop: 5 }}></i>
                        <span style={{ fontWeight: 600 }}>Details</span>
                    </div>


                    <div className={this.state.view=='details'?"defectmenuitem col-md-6":"defectmenuitem defectmenuactive col-md-6"} onClick={this.changeView}>
                        <i className="fa fa-comments-o fa-2x"></i>
                        <span style={{ fontWeight: 600 }}>Discussions</span>
                    </div>

                </div>
                <div className='verticalfullline'></div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: 'rgb(231, 231, 255)', paddingTop: 5 }}>
                    <span style={{ backgroundColor: 'rgb(231, 231, 255)', fontWeight: 700, fontSize: 22, padding: '0px 10px' }}> {this.state.defectDetails.did}</span>
                    <textarea id='description' type='text' value={this.state.defectDetails.title} style={{ width: '95%', borderRadius: 10, padding: '7px' }} rows='1'></textarea>
                </div>
                {this.setView()}


            </div>
        );
    }
}

export default DefectView;