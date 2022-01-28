import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  paragraphVisible: Boolean = false
  logs: String[] = []

  constructor() { }

  toggleVisibility = () => {
    this.paragraphVisible = ! this.paragraphVisible
    this.logClick();
  }

  logClick = () => this.logs.push(this.getTimeStamp() + ": Visibility has been toggled to: " + this.paragraphVisible)  

  getTimeStamp = () => {
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let sec = date.getSeconds()
    return `${day}/${month}/${year} - ${hour}:${minute}:${sec}`
  }

  getBackgroundColor = (i: number) => i >= 4 ? 'cadetblue' : 'transparent'

  getColor = (i: number) => i >= 4

  ngOnInit(): void {
  }

}
