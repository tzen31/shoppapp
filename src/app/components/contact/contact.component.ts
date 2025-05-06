import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  ngOnInit(): void {
    window.scrollTo(0,0)
  }

  contactForm: FormGroup;
  firstname!: FormControl;
  email: FormControl;
  subject: FormControl;
  phone: FormControl;
  message!: FormControl;
  contact: Contact | undefined;

  constructor(private fb: FormBuilder) {
    this.firstname = this.fb.control("", [Validators.required, Validators.minLength(3)]),
    this.email = this.fb.control("", [Validators.required, Validators.email]),
    this.subject = this.fb.control("", [Validators.required, Validators.minLength(10)]),
    this.phone = this.fb.control("", [Validators.required, Validators.minLength(5)]),
    this.message = this.fb.control("", [Validators.required, Validators.minLength(220)]),

    this.contactForm = this.fb.group({
      firstname: this.firstname,
      email: this.email,
      subject: this.subject,
      phone: this.phone,
      message: this.message
    })
  }

handleSubmit(){
  this.contact = {
    firstname: this.firstname.value,
    email: this.email.value,
    phone: this.phone.value,
    subject: this.subject.value,
    message: this.message.value,

  }
  console.log(this.contact);

}
}
