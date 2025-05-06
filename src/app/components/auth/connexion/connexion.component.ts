import { Component } from '@angular/core';
import { User } from "src/app/models/user"
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  standalone: false,
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

  user: User ={
    email: "",
    password: "",
  }

  signinForm: FormGroup;
  email: FormControl;
  password: FormControl;

  constructor(private fb: FormBuilder) {
    this.email = fb.control("",[Validators.email, Validators.required])
    this.password = fb.control("", [Validators.required, Validators.minLength(6)]),
    this.signinForm = fb.group({
      email: this.email,
      password: this.password,
    })
  }

  handleSubmit(){
    //console.log("User : ", this.user);
    console.log(this.signinForm);
  }
}

