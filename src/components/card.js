import React from 'react';
 
const Card = (props) => {
    return (
        <div style={{backgroundColor:'white',borderRadius:3,width:'23%',height:'50vh',marginBottom:30,boxShadow:'3px 3px 8px gray'}}>
            {props.children}
        </div>
    );
}
 
export default Card;