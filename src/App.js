import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Time from './Time';

const SECOND = 1000;

class App extends Component {
  constructor(props){
    super(props);
    let time1 = new Time(0,20,0);
    let time2 = new Time(0,5,30);
    this.state = {
      times : [time1,time2],
    };
  }
  addTime(){
    let time = new Time(10,0,0);
    this.state.times.push(time)
    this.setState({
      times : this.state.times,
    });
  }
  startTimer(){
    console.log("Start Timer")
  }
  render() {
    let timeList = this.state.times.map( time => {
      return(
        <li key={time.id}>{time.strHour()}h:{time.strMin()}m:{time.strSec()}s</li>
      );
    });
    console.log(Object.prototype.toString.call(this.state.times));
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
            {timeList}
            <li key="add" onClick={()=>this.addTime()}>Add</li>
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
