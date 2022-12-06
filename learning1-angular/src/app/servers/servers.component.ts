import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  addNewServers:boolean = false
  serverCreationStatus = 'no server is created'
  serverName=''
  constructor() { 
  setTimeout(() => {
    this.addNewServers = true
  }, 2000);

  }

  ngOnInit(): void {
  }
createServer(){
  this.serverCreationStatus= 'new server is created'
}

onUpdateServerName(event){
  this.serverName = event.target.value;
}

}
