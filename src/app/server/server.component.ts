import { Component } from "@angular/core";

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getServerStatus() {
    return this.serverStatus;
  }

  serverIsOnline = (): Boolean => {
    return this.getServerStatus() === 'online'
      ? true
      : false
  }

  getColor() {
    return this.serverStatus === 'online' ? 'forestgreen' : 'darkred'
  }
}