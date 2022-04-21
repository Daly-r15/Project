import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(public QuestionsService: QuestionsService, public router:Router, public http: HttpClient) { }


  async ngOnInit(){
    var response = this.QuestionsService.getAnswers();
    console.log(response);
    this.Answers= response;

  }

  Answers: any;
  Users: any;

}
