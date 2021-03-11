import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{BackendRequestService} from '../backend-request.service'

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {


  public blocks: any;
 

  constructor(private backendService:BackendRequestService) { }

  ngOnInit(): void {
    this.backendService.getAllBlocks().subscribe(data=>{
      console.log("list of blocks +++++++++++++++++")
      console.log(data);
      this.blocks=data;      
      });
    }
}
