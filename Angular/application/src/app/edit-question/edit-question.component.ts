import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup,  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit {
  form!: FormGroup;
  id=1;

  
  constructor(private QuestionsService: QuestionsService, public route: ActivatedRoute, public fb: FormBuilder, private http: HttpClient, public router: Router) {
    this.form = this.fb.group({
      question_edit:['']
    })
   }


  async ngOnInit(){
    var response = this.http.get('http://localhost:8000/api/questions/'+this.id).subscribe((response:any) => {this.Question = response});
    //this.QuestionsService.getQuestion(this.route.snapshot.params['id']);
    this.Question=response
  }

  Question: any;

  submitForm(){
    var headers= new HttpHeaders().set('content-type',' application/json');
    var formData:any = new FormData();
    formData.append("question_edit", this.form.get('question_edit')?.value);
    var data = JSON.stringify(Object.fromEntries(formData))
    console.log(data)
    this.http.put('http://127.0.0.1:8000/api/questions/'+this.id, data, {headers}).subscribe(
      (response) => console.log(response)
    )
    this.router.navigate(['/EditQuestions']);}; 
}



