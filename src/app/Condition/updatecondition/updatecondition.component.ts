import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ConditionService } from 'src/app/service/condition.service';
import { Condition } from 'src/app/model/Condition';
import { Location } from '@angular/common';

@Component({
  selector: 'app-updatecondition',
  templateUrl: './updatecondition.component.html',
  styleUrls: ['./updatecondition.component.css']
})
export class UpdateconditionComponent implements OnInit {
condition:Condition;
  constructor(private location:Location, private conditionService:ConditionService,private toastr:ToastrService,private router:Router ) { }

  ngOnInit() {
    this.condition=this.conditionService.getter();
  }
  onSubmit(){
    return this.conditionService.updateCondition(this.condition).subscribe((data)=>{
      this.toastr.success('Update Successfully','Condition');
      this.router.navigate(['conditons']);
    })
  }
  backclicked(){
    this.location.back();
    this.toastr.warning('Not Update','Condition');
  }


}
