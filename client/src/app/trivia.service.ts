import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class TriviaService {

  constructor(private _http: Http) { }

  addQuestion(q) {
    return this._http.post('/addQuestion', q).map(data => data.json()).toPromise();
  }

  getQuestions() {
    return this._http.get('/startGame').map(data => data.json()).toPromise();
  }
}
