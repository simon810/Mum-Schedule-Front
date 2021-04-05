import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{BackendRequestService} from '../backend-request.service';
import { FormGroup, FormControl,FormArray, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: []
})
export class ScheduleComponent implements OnInit {
// public form: FormGroup;
  submitted = false;
  blockGroup = new FormGroup({
    blockControl: new FormControl(''),
    
   
  });
  public blocks: any;

  // myForm = new FormGroup({
  //   // product_name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   //      file: new FormControl('', [Validators.required]),
  //   //      price: new FormControl('', [Validators.required]),
  //   //      quantity: new FormControl('', [Validators.required]),
  //   //      product_description: new FormControl('', [Validators.required]),
  //   //      fileSource: new FormControl('', [Validators.required]),


  // });
 

  constructor(private backendService:BackendRequestService, private formBuilder: FormBuilder) {
    //this.form=form1;
   }

  ngOnInit(): void {

    this.blockGroup = this.formBuilder.group({
      blockControl: [false, Validators.requiredTrue],
      checkArray: this.formBuilder.array([])
  });

    this.backendService.getAllBlocks().subscribe(data=>{
      this.blocks=data;     
      console.log(this.blocks) 
      });
    }


    onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.blockGroup.invalid) {
          return;
      }

      // // display form values on success
      // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.blockGroup.value, null, 4));

      console.log(this.blockGroup.value)
      this.backendService.registerBlock(this.blockGroup.value).subscribe(data=>{
        console.log("success");
      })
      
  }

  onReset() {
    this.submitted = false;
    this.blockGroup.reset();
}

onCheckboxChange(e:any){
  const checkArray: FormArray = this.blockGroup.get('checkArray') as FormArray;

  if (e.target.checked) {
    checkArray.push(new FormControl(e.target.value));
  } else {
    let i: number = 0;
    checkArray.controls.forEach((item) => {
      if (item.value == e.target.value) {
        checkArray.removeAt(i);
        return;
      }
      i++;
    });
  }

}
}
