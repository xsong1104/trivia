import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  getUser() {
    return this._http.get('/getUser').map(data => data.json()).toPromise();
  }

  getScore() {
    return this._http.get('/getScore').map(data => data.json()).toPromise();
  }

  setUser(user) {
    return this._http.post('/login', user).map(data => data.json()).toPromise();
  }

  saveScore(user) {
    return this._http.post('/saveScore', user).map(data => data.json()).toPromise();
  }

  getAllScores() {
    return this._http.get('/allScores').map(data => data.json()).toPromise();
  }
}
