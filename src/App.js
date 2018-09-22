import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class Time{
  constructor(){
    this.hour = 0;
    this.minute = 0;
    this.second = 0;
  }
}

class App extends Component {
  constructor(props){
    super(props);
    let time1 = new Time;
    this.state = {
      times : [time1],
    };
  }
  render() {
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
            <li>10m:10s</li>
            <li>1h:0m:0s</li>
            <li>Add</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
