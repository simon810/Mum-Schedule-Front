import { Component, OnInit } from '@angular/core';
import{BackendRequestService} from '../backend-request.service'


@Component({
  selector: 'app-registered-courses',
  templateUrl: './registered-courses.component.html',
  styleUrls: []
})
export class RegisteredCoursesComponent implements OnInit {
  public records: any;

  constructor(private backendService:BackendRequestService) { }

  ngOnInit(): void {

    this.backendService.getAllRegisteredRecords().subscribe(data=>{
      console.log("recieved records+++++++")

      console.log(data);
      this.records=data;
      // this.courses=this.schedule[0].co
  });

}
}
