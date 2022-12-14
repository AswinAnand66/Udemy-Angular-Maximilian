import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
 showPassword:boolean =false;
 buttonClicks:number=0;
 buttons:any=[]
 
  constructor() { }

  ngOnInit(): void {
  }

  getPassword(){
    this.buttonClicks++;
   let log ={
       buttonClicks:this.buttonClicks,
       log: new Date()
   }
    this.buttons.push(log);
 this.showPassword=!this.showPassword;
  }
}
