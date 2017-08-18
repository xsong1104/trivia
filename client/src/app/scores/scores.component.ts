import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css']
})
export class ScoresComponent implements OnInit {
  allScores: Array<User>;
  user: User = new User();
  searchText: string = '';

  constructor(private router: Router, private _user: UserService) {
  }

  ngOnInit() {
      this._user.getUser()
                .then((user) => { this.user.username = user.username; })

      this._user.getScore()
                .then((user) => { this.user.score = user.score; this.user.percentage = user.percentage; })

     this._user.getAllScores()
                .then((users) => { this.allScores = users; })
                .catch((err) => { console.log(err); });
  }

  play() {
    this.router.navigate(['/play']);
  }

}
