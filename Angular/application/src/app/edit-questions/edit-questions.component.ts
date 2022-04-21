import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-questions',
  templateUrl: './edit-questions.component.html',
  styleUrls: ['./edit-questions.component.css']
})
export class EditQuestionsComponent implements OnInit {

  
  constructor(public QuestionsService: QuestionsService, public router:Router, public http: HttpClient) { }


  async ngOnInit(){
    var response = this.QuestionsService.getQuestions();
    console.log(response);
    this.Questions_list = response;
  }

  editQuestion(_id: any){
    this.router.navigate(['/EditQuestions/'+_id])
  }
  Questions_list: any;

}
