import { RequestData } from './../../interfaces/request-data';
import { Task3Service } from './../../service/task3.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  teachersArray: Array<RequestData>;
  constructor(private task3Service: Task3Service) { }

  ngOnInit(): void {
    this.getTeachers()
  }

  async getTeachers(){
    const getInfo = await this.task3Service.getTeachers().toPromise()
    this.teachersArray=getInfo
  }
  filter(id: boolean){
    !id ? this.teachersArray.sort((a,b) => a.name > b.name && -1 || 1) : this.teachersArray.sort((a,b) => a.name > b.name && 1 || -1)
  }

}
