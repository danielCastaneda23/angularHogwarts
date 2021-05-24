import { RequestData } from './../../interfaces/request-data';
import { RequestComponent } from './../request/request.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requestlist',
  templateUrl: './requestlist.component.html',
  styleUrls: ['./requestlist.component.css']
})
export class RequestlistComponent implements OnInit {
  requestPeople: Array<RequestData>= []
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('Requests') != null){
      this.requestPeople= JSON.parse(localStorage.getItem('Requests'))
    }
  }

}
