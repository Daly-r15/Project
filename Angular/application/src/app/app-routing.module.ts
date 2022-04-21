import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { EditQuestionsComponent } from './edit-questions/edit-questions.component';
import { HomeComponent } from './home/home.component';
import { OnSubmitComponent } from './on-submit/on-submit.component';
import { QuestionsComponent } from './questions/questions.component';
import { ReportComponent } from './report/report.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { path: 'Survey', component: SurveyComponent },
  { path: '', component: HomeComponent },
  { path: 'OnSubmit', component: OnSubmitComponent },
  { path: 'Questions', component: QuestionsComponent },
  { path: 'EditQuestions', component: EditQuestionsComponent },
  { path: 'EditQuestions/:id', component: EditQuestionComponent },
  { path: 'answers', component: ReportComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
