import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  user : {
    email: string,
    password: string
  } = {email: '', password: ''}; 

  register(form : NgForm) {
    if(!form.valid)
    {
      console.log( "Form Not Valid");
    }
    else {
     console.log("Form Valid: " + JSON.stringify(form.value));
    }
  }
}
