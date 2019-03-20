import { Component, ɵConsole } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Variables needed....
  username:any = 'none';
  title = 'second';
  itsActive:boolean = true;
  showThanks:boolean = false;
  show:boolean = false;
  sessionContent:String = "";
  count:number = 0;
  serve:boolean = false;
  Question:String = 'Nothing Yet....';
  one:string = 'one';
  two:String = 'two';
  thre:String = 'thre';
  four:String = 'four';
  selected:String;
  allTime:String;
  showWebsite(){
    sessionStorage.setItem("username", this.username);
    this.sessionContent = sessionStorage.getItem("username")
    this.showThanks = false;
    this.show = true;
  }

   sending(name,last){
        this.username = name  + " " +  last;
        this.itsActive = false;
        this.showThanks = true;
   }
   data:any;
   resultsAnswers:any;
   resulsQeustions:any;
   start(){
    // alert('its working,...');
   axios.get('http://localhost:3000/questions').then((results)=>{
       this.resulsQeustions = results.data;
   }).then(()=>{
    axios.get('http://localhost:3000/answers').then((secondRes)=>{
      this.resultsAnswers  = secondRes.data;
  
    }).then(()=>{
      this.dataSelection();
    })
   })
}
     dataSelection(){
        let Questions = this.resulsQeustions;
        let Answers = this.resultsAnswers;
       // getting the numbre of questions ... 
      let numberOfQuestions = Questions.length;
        // getting the number of answers....
       let numberOfAnswers = Answers.length;
   // creating a ramdom numbre variable with the questionslength in mind
      let ramdomNuber =  Math.random() * numberOfQuestions;
      let finalNumber = Math.ceil(ramdomNuber);
  //  change the value to display on screen ....
           this.Question = Questions[finalNumber].questions;
            // answers..
              // fill blanck questions...
             
              let numberTwo =  Math.random() * numberOfQuestions;
              let numberTwos = Math.ceil(numberTwo);

              let numbertree =  Math.random() * numberOfQuestions;
              let numbreTree= Math.ceil(numbertree);

              let numberfour =  Math.random() * numberOfQuestions;
              let numberFour = Math.ceil(numberfour);
             /// Dysplay Positions.....
              let position = Math.random() * 4;
               let FinalPosition  =  Math.ceil(position);
                 // swich to choose the position of the answers
                 switch(FinalPosition) {
                  case 1:
                    // code block
                    this.one = Answers[finalNumber].answers;  
                      this.allTime = Answers[finalNumber].answers; 
                     this.two = Answers[numberFour].answers;
                     this.thre = Answers[numbreTree].answers;
                     this.four = Answers[numberTwos].answers;
                       break;
                  case 2:
                    // code block
                    this.two = Answers[finalNumber].answers;
                    this.allTime = Answers[finalNumber].answers; 
                    this.one = Answers[numberFour].answers;
                    this.thre = Answers[numbreTree].answers;
                    this.four = Answers[numberTwos].answers;
                        break;
                    case 3:
                     //code block
                     this.thre = Answers[finalNumber].answers;
                     this.allTime = Answers[finalNumber].answers; 
                     this.two = Answers[numberFour].answers;
                     this.one = Answers[numberTwos].answers;
                     this.four = Answers[numbreTree].answers;
                        break;
                  default:
                    // code block
                    this.four = Answers[finalNumber].answers;
                    this.allTime = Answers[finalNumber].answers; 
                    this.two = Answers[numberTwos].answers;
                    this.thre = Answers[numberFour].answers;
                    this.one = Answers[numbreTree].answers;
                }
         
        this.QuestionDisplayer();
     }

     QuestionDisplayer(){
         this.serve = true;
         this.show = false;
     } 
   /// tommorow you do collections scores... 
      collectingScores(event){
       this.selected = event.target.value;
       console.log(this.selected);
   
      }
     times:number = 0;
      done(event){
        event.preventDefault();
                 if(this.selected == this.allTime){
             this.count  = this.count + 1;
             this.dataSelection();
          }else{
            this.dataSelection();
          }
          this.times = this.times + 1;
          this.checkCount();
      }
      end:boolean = false;
      checkCount(){
         if(this.times < 12){
            console.log(this.times)
         }else{
            this.serve = false;
            this.end  = true;
         }
      }
}