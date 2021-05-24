import { RequestData } from './../../interfaces/request-data';
import { Task2Service } from './../../service/task2.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentsArray: Array<RequestData> = [];

  constructor(private task2Service: Task2Service, public router: Router) { }

  ngOnInit(): void {
    this.getStudents()
  }

  async getStudents(){
    const studentData =await this.task2Service.getStudents().toPromise()
    this.studentsArray= studentData;
    console.log(this.studentsArray)
  }
  filter(id: boolean){
    !id ? this.studentsArray.sort((a,b) => a.name > b.name && -1 || 1) : this.studentsArray.sort((a,b) => a.name > b.name && 1 || -1)
  }
}
