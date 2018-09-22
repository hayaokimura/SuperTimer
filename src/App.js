import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Timer from './Timer';

const SECOND = 1000;
let intervalId;

class App extends Component {
  constructor(props){
    super(props);
    let timer1 = new Timer(0,0,2);
    let timer2 = new Timer(0,0,2);
    this.state = {
      timers : [timer1,timer2],
      timerIndex : null,
    };
  }
  addTimer(){
    let timer = new Timer(10,0,0);
    this.state.timers.push(timer)
    this.setState({
      timers : this.state.timers,
    });
  }
  countDown(){
    console.log("countdown")
    let nowTimers = this.state.timers;
    let newIndex = this.state.timerIndex;
    const finish = nowTimers[this.state.timerIndex].countDown();
    if (finish){
      if(this.state.timerIndex != this.state.timers.length-1){
        newIndex++
        nowTimers[newIndex].countDown();
      }else{
        this.setState({
          timerIndex: null,
        })
        clearInterval(intervalId)
      }
    }
    this.setState({
      timers: nowTimers,
      timerIndex: newIndex,
    });
  }
  startTimer(){
    console.log("start")
    this.setState({
      timerIndex: 0,
    });
    intervalId = setInterval(()=>{this.countDown()},SECOND)
  }
  render() {
    let timerList = this.state.timers.map( timer => {
      return(
        <li key={timer.id}>{timer.strHour()}h:{timer.strMin()}m:{timer.strSec()}s</li>
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <AppBar position="static" color="default">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Super Timer
              </Typography>
            </Toolbar>
          </AppBar>
        </header>
        <div className="Main">
          <ul>
            {timerList}
            <li key="add" onClick={()=>this.addTimer()}>Add</li>
          </ul>
        </div>
        <footer>
          <div><button onClick={()=>this.startTimer()}>Start</button></div>
        </footer>
      </div>
    );
  }
}

export default App;
