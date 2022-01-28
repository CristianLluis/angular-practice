import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer: Boolean = false
  serverCreationStatus: String = 'No server was created'
  serverName: String
  newServerCreated: Boolean = false
  servers: String[] = ['Testserver', 'Testserver 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit(): void {
  }

  serverCreated = (): Boolean => this.newServerCreated

  onCreateServer(): void{
    this.serverCreationStatus = 'New server has been created! Name is ' + this.serverName
    this.newServerCreated = true
    this.servers.push(this.serverName)
  }

  serverNameAvailable(): Boolean {
    return ! ((this.serverName === undefined) || (this.serverName === "") || (this.serverName === null))
  }

  onUpdateServerName(event: { target: HTMLInputElement }): void {
    this.serverName = event.target.value
  }

}
