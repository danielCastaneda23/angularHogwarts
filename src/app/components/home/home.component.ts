import { RequestData } from './../../interfaces/request-data';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  requestData: Array<RequestData> = [];
  show: boolean = false;
  constructor(public _router: Router) {
    
   }

  ngOnInit(): void {
    this.requestData= JSON.parse(localStorage.getItem('Requests'))
    if (this.requestData != null){
      console.log(this.requestData)
      this.show=true;
      console.log(this.show)
    }
  }
}
