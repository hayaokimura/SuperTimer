import React, { Component } from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Timer from './Timer';
import StartStop from './StartStop';
import AddTimer from './AddTimer';

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
      backup : [],
      counting: false,
      modalOpen: false,
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
      nowTimers[newIndex].hour = this.state.backup[newIndex][0]
      nowTimers[newIndex].minute = this.state.backup[newIndex][1]
      nowTimers[newIndex].second = this.state.backup[newIndex][2]
      if(this.state.timerIndex !== this.state.timers.length-1){
        newIndex++
        nowTimers[newIndex].countDown();
      }else{
        this.setState({
          timerIndex: null,
          backup: [],
          counting: false,
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
    const backup = this.state.timers.map((val)=>{return [val.hour,val.minute,val.second]});
    this.setState({
      timerIndex: 0,
      backup: backup,
      counting: true,
    });
    intervalId = setInterval(()=>{this.countDown()},SECOND)
  }
  stopTimer(){
    console.log("stop")
    let nowTimers = this.state.timers;
    for(let i=0;i<this.state.backup.length;i++){
      nowTimers[i].hour = this.state.backup[i][0]
      nowTimers[i].minute = this.state.backup[i][1]
      nowTimers[i].second = this.state.backup[i][2]
    }
    this.setState({
      timers: nowTimers,
      timerIndex: null,
      backup: [],
      counting: false,
    });
    clearInterval(intervalId);
  }
  openModal(){
    console.log("openModal")
    this.setState({modalOpen:true})
  }
  closeModal(){
    this.setState({modalOpen:false})
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
            <li key="add" onClick={()=>this.openModal()}>Add</li>
          </ul>
        </div>
          <AddTimer modalOpen={this.state.modalOpen} closeModal={()=>this.closeModal()}/>
        <footer>
          <StartStop start={()=>this.startTimer()} stop={()=>this.stopTimer()} counting={this.state.counting}/>
        </footer>
      </div>
    );
  }
}

export default App;
