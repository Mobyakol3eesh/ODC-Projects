import { HttpClient } from '@angular/common/http';
import { Component, inject, NgModule} from '@angular/core';
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
  httpClient = inject(HttpClient);

  login(form : NgForm) {
    if(!form.valid)
    {
      console.log( "Form Not Valid");
    }
    else {
      this.httpClient.post('http://localhost:3000/login', this.user ,{withCredentials : true}).subscribe((res : any) => {
        if(res.msg === "Login successful") {
          this.router.navigate(['/home']);
          console.log(document.cookie);
        }
        else {
          alert(res.msg);
        }
      });
    }
  }
}
