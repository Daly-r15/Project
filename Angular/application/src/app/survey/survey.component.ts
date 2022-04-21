import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  
  form!: FormGroup;
  title = 'application';

  constructor(public fb: FormBuilder, private http: HttpClient, private router: Router ){
    this.form = this.fb.group({
      CompanyName:['', Validators.required],
      CompanyType: ['', Validators.required],
      UsersName: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submitForm(){
    var headers= new HttpHeaders().set('content-type',' application/json');
    var formData:any = new FormData();
    formData.append("CompanyName", this.form.get('CompanyName')?.value);
    formData.append("CompanyType", this.form.get('CompanyType')?.value);
    formData.append("UsersName", this.form.get('UsersName')?.value);
    var data = JSON.stringify(Object.fromEntries(formData))
    console.log(data)
    this.http.post('http://127.0.0.1:8000/api/userdetails', data, {headers}).subscribe(
      (response) => console.log(response)
    )
    this.router.navigate(['/Questions']);}; 

  isInvalid(control:any){
    return this.form.controls[control].invalid && this.form.controls[control].touched
  }
  isUntouched() {
    return this.form.controls['CompanyName'].pristine ||
    this.form.controls['CompanyType'].pristine ||
    this.form.controls['UsersName'].pristine;

    }
    isIncomplete() {
    return this.isInvalid('CompanyName') || 
    this.isInvalid('CompanyType') ||
    this.isInvalid('UsersName') ||
    this.isUntouched();
    }
}
