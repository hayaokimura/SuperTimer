export default class Timer{
    constructor(hour,minute,second){
      this.id = Timer.getUniqueStr();
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
      return this.convStr(this.second);
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
     countDown(){
       let finish = false
       if(this.second != 0){
         this.second--;
       }else{
         if(this.minute != 0){
           this.minute--;
           this.second = 59;
         }else{
           if(this.hour != 0){
             this.hour--;
             this.minute = 59;
             this.second = 59;
           }else{
             finish = true
           }
         }
       }
       return finish
     }
  
  }