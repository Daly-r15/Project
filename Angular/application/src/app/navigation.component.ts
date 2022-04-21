import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router } from '@angular/router';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls:[]
})

export class NavComponent{

    constructor( public authService: AuthService, private router: Router){

        

    }

    click_Questionnaire(){
        this.router.navigate(['/Survey'])
      }

    click_Edit(){
        this.router.navigate(['/EditQuestions'])
    }
 }
