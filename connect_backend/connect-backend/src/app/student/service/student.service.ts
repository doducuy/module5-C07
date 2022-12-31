import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private _mess?:string;

  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<Student[]>{
    return this._httpClient.get<Student[]>("http://localhost:3000/students")
  }
  findById(id:number): Observable<Student>{
    return this._httpClient.get<Student>("http://localhost:3000/students"+"/"+id)
  }
  saveEditStudent(student:any){
    return this._httpClient.patch("http://localhost:3000/students"+"/"+student.id,student )
  }

  get mess(): string|undefined {
    return this._mess;
  }

  setMess(value: string|undefined) {
    this._mess = value;
  }
}
