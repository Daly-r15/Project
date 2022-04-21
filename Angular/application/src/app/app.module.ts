import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { QuestionsService } from './questions.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { HomeComponent } from './home/home.component';
import { OnSubmitComponent } from './on-submit/on-submit.component';
import { SurveyComponent } from './survey/survey.component';
import { EditQuestionsComponent } from './edit-questions/edit-questions.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { AuthModule } from '@auth0/auth0-angular';
import { NavComponent } from './navigation.component';
import { ReportComponent } from './report/report.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    HomeComponent,
    OnSubmitComponent,
    SurveyComponent,
    EditQuestionsComponent,
    EditQuestionComponent,
    NavComponent,
    ReportComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule, 
    ReactiveFormsModule,
    MatExpansionModule,
    AuthModule.forRoot( {
      domain:'dev-rem9hg9t.us.auth0.com',
      clientId:'hfltGW5JOhc7PdAKFr7FQ4V5Cq34agj5'
    })
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
