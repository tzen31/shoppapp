import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  firstname: string = ""
  names: string[] = ['Paul']

  ngOnInit(): void {

  }

  handleSave(){
    if(this.firstname){
     this.names.push(this.firstname)
     this.firstname = ""
    }
  }

  handleDelete(index: number){
    if(index >= 0){
        this.names.splice(index,1)
    }
  }
  handleUpdate(index: number){
    if(index >= 0){
      const name = this.names[index]
      this.firstname = name
      this.names.splice(index,1)
    }
  }
}
