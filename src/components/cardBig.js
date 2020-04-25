import React from 'react';
 
const CardBig = (props) => {
    return (
        <div style={{backgroundColor:'white',borderRadius:3,width:'48%',height:'60vh',boxShadow:'3px 3px 4px gray',marginBottom:30}}>
            {props.children}
        </div>
    );
}
 
export default CardBig;