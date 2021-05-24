import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Task2Service {

  constructor(private http: HttpClient) { }

  getStudents() {
    const path = "http://hp-api.herokuapp.com/api/characters/students";
    return this.http.get<any>(path)
  }

}
