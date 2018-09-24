import React from 'react';

function Keyboard(props){
    let nums = [];
    for (let i=0;i<3;i++){
        let low = [];
        for(let j=0;j<3;j++){
            low.push(j+1+i*3);
        }
        nums.push(low);
    }
    const moveKey = ()=>{
        if (props.timeScale === "hour"){
            return (
                <div className="keyboardLow">
                    <div className="numKey"></div>
                    <div className="numKey">0</div>
                    <div className="numKey">Minute</div>
                </div>
            );
        }else if(props.timeScale === "minute"){
            return (
                <div className="keyboardLow">
                    <div className="numKey">Hour</div>
                    <div className="numKey">0</div>
                    <div className="numKey">Second</div>
                </div>
            );
        }else if(props.timeScale === "second"){
            return (
                <div className="keyboardLow">
                    <div className="numKey">Minute</div>
                    <div className="numKey">0</div>
                    <div className="numKey"></div>
                </div>
            );
        }
        
    }
    const numKeys = nums.map((low)=>{
        const lowKeys = low.map(num=>{
            return <div className="numKey">{num}</div>
        });
        return <div className="keyboardLow">{lowKeys}</div>
    })
    return (
        <div className="Keyboard">{moveKey()}{numKeys}</div>
    )
}

export default Keyboard