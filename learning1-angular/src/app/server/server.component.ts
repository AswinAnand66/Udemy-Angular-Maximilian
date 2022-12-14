import { Component } from "@angular/core";


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
  serverId:number = 4321;
  serverStatus:string = 'Online';

  constructor(){
    this.serverStatus= Math.random() >0.5? 'Online':'Offline';
  }

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    return this.serverStatus=='Online'?'green':'red';
  }

}

