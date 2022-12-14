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
  serverCreated:boolean=false
  servers=['server1','server2'];
  constructor() { 
  setTimeout(() => {
    this.addNewServers = true
  }, 2000);

  }

  ngOnInit(): void {
  }
createServer(){
  this.serverCreated=true;
  this.serverCreationStatus= 'new server is created '+ this.serverName
  this.servers.push(this.serverName);
}

onUpdateServerName(event){
  this.serverName = event.target.value;
}

}
