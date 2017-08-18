import { Component, OnInit } from '@angular/core';
import { TriviaService } from '../trivia.service';
import { Trivia } from '../trivia';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {
  trivia: Trivia;

  constructor(private _trivia:TriviaService, private _router: Router) { }

  ngOnInit() {
    this.trivia = new Trivia();
  }

  cancel() {
    this._router.navigate(['/']);
  }

  addQuestion() {
    this.trivia.options = [this.trivia.answer, this.trivia.fakeAnswer1, this.trivia.fakeAnswer2];
    this._trivia.addQuestion(this.trivia)
    .then(() => { alert("Question was added successfully!");
                  this._router.navigate(['/scores']); })
    .catch((err) => { alert("Question was not added :("); });
  }

}
