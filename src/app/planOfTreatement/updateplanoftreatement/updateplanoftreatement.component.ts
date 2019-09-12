import { Component, OnInit } from '@angular/core';
import { PlanOfTreatementService } from 'src/app/service/plan-of-treatement.service';
import { PlanOfTreatement } from 'src/app/model/PlanOfTreatement';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-updateplanoftreatement',
  templateUrl: './updateplanoftreatement.component.html',
  styleUrls: ['./updateplanoftreatement.component.css']
})
export class UpdateplanoftreatementComponent implements OnInit {
  planoftreatement:PlanOfTreatement;
  constructor(private toastr:ToastrService, private planoftreatementService:PlanOfTreatementService,private location:Location,private router:Router) { }

  ngOnInit() {
    console.log(this.planoftreatementService.getter());
    this.planoftreatement=this.planoftreatementService.getter();

  }
  backclicked(){
    this.location.back();
    this.toastr.warning('Not Update','Plan Of Treatement');
  }
  save(){
    console.log(this.planoftreatement);
      this.planoftreatementService.updateplanOfTreatement(this.planoftreatement).subscribe((data)=>{
        console.log(data);
        this.router.navigate(['planoftreatement']);
        this.toastr.success('Update Successfully','Plan Of Treatement');
      },(error)=>{
        console.log(error);
      })
    }
    
    onSubmit(){
      this.save();
    }

}
