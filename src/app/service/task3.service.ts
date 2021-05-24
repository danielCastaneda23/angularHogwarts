import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Task3Service {

  constructor(private http: HttpClient) { }
  getTeachers(){
    const path = "http://hp-api.herokuapp.com/api/characters/staff";
    return this.http.get<any>(path)
  }
}
