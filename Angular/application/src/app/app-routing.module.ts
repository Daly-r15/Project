import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OnSubmitComponent } from './on-submit/on-submit.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  { path: 'Questions', component: QuestionsComponent },
  { path: '', component: HomeComponent },
  { path: 'OnSubmit', component: OnSubmitComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
