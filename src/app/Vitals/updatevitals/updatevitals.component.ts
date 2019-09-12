import { Component, OnInit } from '@angular/core';
import { Vitals } from 'src/app/model/vitals';
import { VitalsService } from 'src/app/service/vitals.service';
import {Location} from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatevitals',
  templateUrl: './updatevitals.component.html',
  styleUrls: ['./updatevitals.component.css']
})
export class UpdatevitalsComponent implements OnInit {
vitals:Vitals;
  constructor(private router:Router, private vitalsService:VitalsService,private location:Location,private toastr:ToastrService) { }

  ngOnInit() {
    console.log(this.vitals);
    console.log("fgdg");
    this.vitals=this.vitalsService.getter();
  }
  backclicked(){
    this.location.back();
    this.toastr.error('Not Update','Vitals');
  }
  onSubmit(){
     this.vitalsService.updateVitals(this.vitals).subscribe((data)=>{
       this.toastr.success('Update Successfully','Vitals');
       this.router.navigate(['vitals']);
       console.log(data);
     },(error)=>{
       console.log(error);
     })
  }

}
