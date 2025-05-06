import { Component } from '@angular/core';
import { User } from "src/app/models/user"
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

  user: User ={
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    passwordConfirm: ""
  }

  inscriptionForm: FormGroup;
  firstname: FormControl;
  lastname: FormControl;
  email: FormControl;
  password: FormControl;
  passwordConfirm: FormControl;

  constructor(private fb: FormBuilder) {
    this.firstname = fb.control("",[Validators.required]),
    this.lastname = fb.control("", [Validators.required]),
    this.email = fb.control("",[Validators.email, Validators.required])
    this.password = fb.control("", [Validators.required, Validators.minLength(6)]),
    this.passwordConfirm = fb.control("", [Validators.required, Validators.minLength(6)]),

    this.inscriptionForm = fb.group({
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm,
    })
  }

  handleSubmit(){
    console.log("User : ", this.user);
  }
}
