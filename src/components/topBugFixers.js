import React, { Component } from 'react';
import user from '../images/user.png'
class TopBugFixers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toppers: [
                { name: 'Anvesh Anu', fixed: 4 },
                { name: 'Nikitha A', fixed: 4 },
                { name: 'Ramana Basu', fixed: 3 },
                { name: 'Komala N', fixed: 2 },
                { name: 'Tomasz Bec', fixed: 2 },
            ]
        };
    }
    render() {
        return (
            <div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 10 }}>
                    <span style={{ marginLeft: 10, fontWeight: 800, fontSize: 15, color: '#484662' }}>Top 5 Bug Fixers</span>
                    <span style={{ marginLeft: 10, fontWeight: 400, fontSize: 13, color: '#484662' ,marginBottom:10}}>Users with maximum fixed</span>
                    {this.state.toppers.map(x => {
                        return (
                            <div style={{height:40,margin:4}}>
                                <img src={user} style={{width:36,height:36,borderRadius:50,marginRight:10,marginLeft:10}}></img>
                                <span style={{fontWeight:680,color:'#7E7E95'}}>{x.name}</span>
                                <span style={{float:'right',paddingRight:15,color:'blue'}}>{x.fixed}</span>
                                <div style={{width:'90%',marginLeft:'5%', border:'1px solid gray',marginTop:5}}></div>
                                </div>
                                
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default TopBugFixers;