import React, { Component } from 'react';

class StartStop extends Component {
    constructor(props){
      super(props);
    }
    
    render(){
        const text = this.props.counting?"Stop":"Start";
        const func = this.props.counting?this.props.stop:this.props.start;
        return(
            <div><button onClick={func}>{text}</button></div>
        );
    }
}

export default StartStop