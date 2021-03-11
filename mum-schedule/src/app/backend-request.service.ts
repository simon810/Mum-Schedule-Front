import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BackendRequestService {
  baseUrl: String = 'http://localhost:8089/'

  constructor(private http: HttpClient) { }


  // getAllSchedules(){
  //   return this.http.get(this.baseUrl + 'schedule/schedules');
  // }

  getAllBlocks(){
    return this.http.get(this.baseUrl + 'block/blocks');
  }

  getAllRegisteredRecords() {
    return this.http.get(this.baseUrl + 'register-record/records');
  }
}