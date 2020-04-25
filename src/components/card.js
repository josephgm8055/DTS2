import React from 'react';
 
const Card = (props) => {
    return (
        <div style={{backgroundColor:'white',borderRadius:3,width:'24%',height:'50vh',boxShadow:'3px 3px 4px gray',marginBottom:10}}>
            {props.children}
        </div>
    );
}
 
export default Card;