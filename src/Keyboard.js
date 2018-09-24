import React from 'react';

export function HourKeyboad(props){
    let hours = [];
    for(let i=0;i<4;i++){
        let low = []
        for(let j=0;j<6;j++){
            low.push(j+i*6+1)
        }
        hours.push(low)
    }
    const hourButtons = hours.map((val,index)=>{
        const low = val.map((hour)=>{
            return(<div key={hour} className="hourButton">{hour}</div>)
        });
        return(
            <div className="KeyboardLow" key={index}>{low}</div>
        );
    });
    return <div>{hourButtons}</div>
}

export function MinuteKeyboad(props){
    let minutes = [];
    for(let i=0;i<12;i++){
        let low = []
        for(let j=0;j<5;j++){
            low.push(j+i*5+1)
        }
        minutes.push(low)
    }
    const minuteButtons = minutes.map((val,index)=>{
        const low = val.map((minute)=>{
            return(<div key={minute} className="minuteButton">{minute}</div>)
        });
        return(
            <div className="KeyboardLow" key={index}>{low}</div>
        );
    });
    return <div>{minuteButtons}</div> 
}
export function SecondKeyboad(props){
    return 
}