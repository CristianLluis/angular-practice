import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: Boolean = false;
  serverCreationStatus: String = 'No server was created';
  serverName: String;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(): void{
    this.serverCreationStatus = this.serverNameAvailable()
      ? 'Server has been created! Name is ' + this.serverName
      : 'Server has been created! - No name given :-(';
  }

  serverNameAvailable(): Boolean {
    return ! ((this.serverName === undefined) || (this.serverName === "") || (this.serverName === null))
  }

  onUpdateServerName(event: { target: HTMLInputElement; }): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
