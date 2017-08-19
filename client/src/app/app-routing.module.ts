import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { ScoresComponent } from './scores/scores.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent},
    { path: 'scores', component: ScoresComponent },
    { path: 'add', component: NewQuestionComponent },
    { path: 'play', component: PlayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
