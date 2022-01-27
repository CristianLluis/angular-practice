import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  userName: String;

  constructor() { }

  userNameIsEmpty = (): Boolean => ((this.userName === undefined) || (this.userName === '') || (this.userName === null))
  
  userNameText = (): String => {
    return this.userNameIsEmpty()
      ? 'No username given'
      : 'Entered username: ' + this.userName
  }

  resetUsername = () => this.userName = ''

  ngOnInit(): void {
  }
}
