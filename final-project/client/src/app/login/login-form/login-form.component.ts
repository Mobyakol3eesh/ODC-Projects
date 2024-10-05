import { Component, NgModule} from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { json } from 'stream/consumers';
@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  user : {
    email: string,
    password: string
  } = {email: '', password: ''}; 
  constructor(private router : Router) {}
  login(form : NgForm) {
    if(!form.valid)
    {
      console.log( "Form Not Valid");
    }
    else {
      this.router.navigate(['/home']);  
     console.log("Form Valid: " + JSON.stringify(form.value));
    }
  }
}
