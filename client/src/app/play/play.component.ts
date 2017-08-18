import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Trivia } from '../trivia';
import { Game } from '../game';
import { UserService } from '../user.service';
import { TriviaService } from '../trivia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  user: User = new User();
  questions: Array<Trivia>;
  playerChoices: Array<number>;

  constructor(private _user: UserService, private _trivia: TriviaService, private _router: Router) { }

  ngOnInit() {
    this._user.getUser()
    .then((user) => { this.user.username = user.username; })

    this._trivia.getQuestions()
    .then((questions) => {
      this.questions = questions.questions;
    })
    .catch((err) => { console.log(err); });

    this.playerChoices = [null, null, null];
  }

  cancel() {
    this._router.navigate(['/']);
  }

  checkAnswers() {
    if (this.playerChoices.includes(null)) {
      alert("Must answer all the questions!");
    }
    else {
      for (let c = 0; c < this.playerChoices.length; c++) {
        if (this.playerChoices[c] == 0) {
          this.user.score++;
        }
      }
      this.user.percentage = this.user.score/3 * 100;
      this._user.saveScore(this.user)
      .then(() => {
        this._router.navigate(['/scores']);
        })
      .catch((err) => { console.log(err); });
    }
  }

}
