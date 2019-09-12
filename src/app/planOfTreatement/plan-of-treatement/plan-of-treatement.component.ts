import { Component, OnInit } from '@angular/core';
import { PlanOfTreatementService } from 'src/app/service/plan-of-treatement.service';
import { PlanOfTreatement } from 'src/app/model/PlanOfTreatement';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-of-treatement',
  templateUrl: './plan-of-treatement.component.html',
  styleUrls: ['./plan-of-treatement.component.css']
})
export class PlanOfTreatementComponent implements OnInit {
  planoftreatement:PlanOfTreatement[];
  constructor(private planoftreatementService:PlanOfTreatementService,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
    this.getplanOfTreatement();
  }
  getplanOfTreatement(){
    return this.planoftreatementService.getPlanOfTreatement().subscribe((data:any)=>{
      this.planoftreatement=data;
    },(error)=>{
      console.log(error);
    })
  }
  updatePlanoftreatement(planoftreatement:PlanOfTreatement){
    this.planoftreatementService.setter(planoftreatement);
    this.router.navigate(['updateplanoftreatement']);


  }
  deletePlanoftreatement(planoftreatement:PlanOfTreatement){
    if(confirm('are you sure to delete this record ? ')){
      this.planoftreatementService.deletePlanoftreatement(planoftreatement.id).subscribe((data)=>{
        this.planoftreatement.splice(this.planoftreatement.indexOf(planoftreatement),1);
        this.toastr.success('Deleted successfully', 'User');
        

      },(error)=>{
        console.log(error);
      })
    }
  }
}
