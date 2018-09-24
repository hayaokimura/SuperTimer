import React from 'react';

function StartStop(props){
    const text = props.counting?"Stop":"Start";
    const func = props.counting?props.stop:props.start;
    return(
        <div><button onClick={func}>{text}</button></div>
    );
}
export default StartStop