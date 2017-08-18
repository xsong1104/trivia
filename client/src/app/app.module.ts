import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PlayComponent } from './play/play.component';
import { ScoresComponent } from './scores/scores.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { TriviaService } from './trivia.service';
import { UserService } from './user.service';
import { CommunicationService } from './communication.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlayComponent,
    ScoresComponent,
    NewQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule, // <-- Include module in our AppModules
  ],
  providers: [TriviaService,
              UserService,
              CommunicationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
