import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor( private http: HttpClient) { }

  getAllTasks(id: string){
    const path = `http://hp-api.herokuapp.com/api/characters/house/${id}`;
    return this.http.get<any>(path)
  }
}
