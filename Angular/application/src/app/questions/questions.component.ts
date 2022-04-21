import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { QuestionsService } from '../questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  private QuestionsURL = 'http://127.0.0.1:8000/api/answers'
  form: FormGroup;
  Questions_list: any;
  constructor(private router: Router, private http: HttpClient, public fb: FormBuilder, public QuestionsService: QuestionsService) { 
    this.form = this.fb.group({
      Question1 : [''],
      Question2 : [''],
      Question3 : [''],
      Question4 : [''],
      Question5 : [''],
      Question6 : [''],
      Question7 : [''],
      Question8 : [''],
      Question9 : [''],
      Question10 : [''],
      Question11: [''],
      Question12: [''],
      Question13: [''],
      Question14: ['']
    })

  }
  ngOnInit(){
    var response = this.QuestionsService.getQuestions();
    this.Questions_list = response;
  }


  submitForm(){
    var headers= new HttpHeaders().set('content-type',' application/json');
    var formData:any = new FormData();
    formData.append("Question1", this.form.get('Question1')?.value);
    formData.append("Question2", this.form.get('Question2')?.value);
    formData.append("Question3", this.form.get('Question3')?.value);
    formData.append("Question4", this.form.get('Question4')?.value);
    formData.append("Question5", this.form.get('Question5')?.value);
    formData.append("Question6", this.form.get('Question6')?.value);
    formData.append("Question7", this.form.get('Question7')?.value);
    formData.append("Question8", this.form.get('Question8')?.value);
    formData.append("Question9", this.form.get('Question9')?.value);
    formData.append("Question10", this.form.get('Question10')?.value);
    formData.append("Question11", this.form.get('Question11')?.value);
    formData.append("Question12", this.form.get('Question12')?.value);
    formData.append("Question13", this.form.get('Question13')?.value);
    formData.append("Question14", this.form.get('Question14')?.value);
    var data = JSON.stringify(Object.fromEntries(formData))
    console.log(data)
    this.http.post('http://127.0.0.1:8000/api/answers', data, {headers}).subscribe(
      (response) => console.log(response)
    )
    this.router.navigate(['/OnSubmit']);
  };

  isInvalid(control:any){
    return this.form.controls[control].invalid && this.form.controls[control].touched
  }
  isUntouched() {
    return this.form.controls['Question1'].pristine ||
    this.form.controls['Question2'].pristine ||
    this.form.controls['Question3'].pristine ||
    this.form.controls['Question4'].pristine ||
    this.form.controls['Question5'].pristine ||
    this.form.controls['Question6'].pristine ||
    this.form.controls['Question7'].pristine ||
    this.form.controls['Question8'].pristine ||
    this.form.controls['Question9'].pristine ||
    this.form.controls['Question10'].pristine ||
    this.form.controls['Question11'].pristine ||
    this.form.controls['Question12'].pristine ||
    this.form.controls['Question13'].pristine ||
    this.form.controls['Question14'].pristine;

    }
    isIncomplete() {
    return this.isInvalid('Question1') || 
    this.isInvalid('Question2') ||
    this.isInvalid('Question3') ||
    this.isInvalid('Question4') ||
    this.isInvalid('Question5') ||
    this.isInvalid('Question6') ||
    this.isInvalid('Question7') ||
    this.isInvalid('Question8') || 
    this.isInvalid('Question9') ||
    this.isInvalid('Question10') ||
    this.isInvalid('Question11') ||
    this.isInvalid('Question12') ||
    this.isInvalid('Question13') ||
    this.isInvalid('Question14') ||
    this.isUntouched();
    }

}
