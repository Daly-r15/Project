import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    form!: FormGroup;
    title = 'application';

    constructor(public fb: FormBuilder, private http: HttpClient, private router: Router ){
      this.form = this.fb.group({
        CompanyName:[''],
        CompanyType: [''],
        UsersName: ['']
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
}
