import React, { Component } from 'react';
import NavBar from './navbar'
import MenuBar from './menubar'
import { Link, Redirect } from 'react-router-dom'
class Discussion extends Component {
    constructor(props) {
        super(props);
        //var did = this.props.match.params.did
        this.state = {
            discussion: [
                { owner: 'Reenu Celine', msg: 'Hai this is not on priority. so we will put it in next release', time: '12-1-2010 10:35 AM' },
                { owner: 'Reenu Celine', msg: 'Hai this is not on priority. so we will put it in next release', time: '12-1-2010 10:35 AM' },
                { owner: 'Reenu Celine', msg: 'Hai this is not on priority. so we will put it in next release', time: '12-1-2010 10:35 AM' },
                { owner: 'Reenu Celine', msg: 'Hai this is not on priority. so we will put it in next release', time: '12-1-2010 10:35 AM' },
                { owner: 'Reenu Celine', msg: 'Hai this is not on priority. so we will put it in next release', time: '12-1-2010 10:35 AM' },
                { owner: 'Reenu Celine', msg: 'Hai this is not on priority. so we will put it in next release', time: '12-1-2010 10:35 AM' },
                { owner: 'Reenu Celine', msg: 'Hai this is not on priority. so we will put it in next release', time: '12-1-2010 10:35 AM' },

            ]
        };
    }
    render() {
        return (
            <div style={{backgroundColor:'#E7E7FF',paddingTop:10}}>
            {
                this.state.discussion.map(e => {
                    return (<div className="chatBox">
                        <div className="Timespamp">{e.time}</div>
                        <div className="sender">{e.owner}</div>
                        <div className="message">{e.msg}</div>
                        
                    </div>)
                })
            }
            </div>
        );
    }
}

export default Discussion;