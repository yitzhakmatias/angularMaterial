import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) {
  }

  getTasks() : Observable<any>{
  /*  this.http.get<any>('/server/api/v1/tasks').subscribe(data => {
      console.log(data);
      return data;
    }, error => {
      console.log(error.toString());
    });*/
    return  this.http.get<any>('/server/api/v1/tasks');
  }
}
