import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

newServerName='';
newServerContent='';
@Output() serverCreated = new EventEmitter<{serverName:string,serverContent:string}>();
@Output('bpCreated') blueprintCreated = new EventEmitter<{serverName:string,serverContent:string}>();

@ViewChild('serverContentInput',{static:true}) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated.emit({serverName:this.newServerName,
     serverContent:this.serverContentInput.nativeElement.value
    })
  }

 onAddBluePrint(){
 this.blueprintCreated.emit({
  serverName:this.newServerName, serverContent:this.serverContentInput.nativeElement.value})
 }

}
