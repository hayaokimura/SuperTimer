export default class Time{
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