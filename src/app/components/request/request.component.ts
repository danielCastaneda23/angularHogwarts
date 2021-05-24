import { RequestData } from './../../interfaces/request-data';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  signupForm: FormGroup
  container: Array<RequestData>= []


  constructor(
    private _builder: FormBuilder
  ) {
    this.signupForm= this._builder.group({
      name: ['',Validators.required],
      patronus: [''],
      yearOfBirth: [''],
      image: ['',Validators.required]
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('Requests') != null){
      this.container= JSON.parse(localStorage.getItem('Requests'))
    }
    
  }

  enviar(values){
    this.container.push(values)
    localStorage.setItem('Requests',JSON.stringify(this.container))
    window.location.assign("http://localhost:4200/requestlist")
  }
}
