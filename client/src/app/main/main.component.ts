import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  user: User;

  constructor(private _user: UserService) { }

  ngOnInit() {
    this.user = new User();
    this._user.getUser()
    .then((user) => {this.user.username = user.username;})
    .catch((err) => {
      while (this.user.username == '' || this.user.username == null) {
        this.user.username = prompt("What is your name?");
      }
      this._user.setUser(this.user);
    })
  }

}
