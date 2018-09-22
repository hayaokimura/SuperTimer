import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Time{
  constructor(hour,minute,second){
    this.id = Time.getUniqueStr();
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }
  strHour(){
    return this.convStr(this.hour);
  }
  strMin(){
    return this.convStr(this.minute);
  }
  strSec(){
    return this.convStr(this.minute);
  }
  convStr(num){
    let str = num.toString();
    if(str.length == 1){
      str = "0"+str;
    }
    return str
  }

  static getUniqueStr(myStrong){
    var strong = 1000;
    if (myStrong) strong = myStrong;
    return new Date().getTime().toString(16)  + Math.floor(strong*Math.random()).toString(16)
   }

}

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
    console.log(Object.prototype.toString.call(this.state.times));
  }
  render() {
    let timeList = this.state.times.map( time => {
      console.log("done");
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
                Photos
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
      </div>
    );
  }
}

export default App;
