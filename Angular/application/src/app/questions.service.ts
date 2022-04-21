import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgStyle } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable()
export class QuestionsService {
  Questions_list: any;
  Question:any;
  id:any;
  Answers:any;
  Users:any;
  constructor(private http: HttpClient) { }

  getQuestions()
  {
        return this.http.get('http://localhost:8000/api/questions').subscribe((response:any) => {this.Questions_list = response});

  }

  getQuestion(id: string)
  {
    return this.http.get('http://localhost:8000/api/questions/'+id).subscribe((response:any) => {this.Question = response});

  }

  getAnswers()
    {
      return this.http.get('http://localhost:8000/api/answers').subscribe((response:any) => {this.Answers = response});
    }


}
