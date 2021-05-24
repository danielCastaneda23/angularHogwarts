import { RequestData } from './../../interfaces/request-data';
import { TaskService } from './../../service/task.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  DataArray:Array<RequestData>
  show:boolean=false;
  constructor(private taskService : TaskService) {
  }

  async getAllTask(id: string){
      const Datos = await this.taskService.getAllTasks(id).toPromise()
      this.DataArray=Datos;
      console.log(this.DataArray)
      this.show=true;
  }

  filter(id: boolean){
    !id ? this.DataArray.sort((a,b) => a.name > b.name && -1 || 1) : this.DataArray.sort((a,b) => a.name > b.name && 1 || -1)
  }

  ngOnInit(): void {
  }

}

