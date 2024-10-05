import { Component } from '@angular/core';
import { FormsModule,NgForm } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-form',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss'
})
export class RegisterFormComponent {
  user : {
    name: string,
    email: string,
    password: string
  } = {name: '',email: '', password: ''}; 
  constructor(private router : Router) {}
  register(form : NgForm) {
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
