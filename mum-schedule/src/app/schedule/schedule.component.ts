import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{BackendRequestService} from '../backend-request.service'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  public headers= ['Block','Course','Title','Faculty','Start Date','End Date']

  public schedule: any;
  // public courses: any;
  public courses: Array<any>=[{}];

  constructor(private backendService:BackendRequestService) { }

  ngOnInit(): void {
    this.backendService.getAllBlocks().subscribe(data=>{
      console.log(data);
      this.schedule=data;
      // this.courses=this.schedule[0].courses;
      
      var i=0;
      for(var c in this.schedule){

        this.courses[i]=this.schedule[i].courses;
        i++

      }

      console.log(this.courses);

    });

  }

}
