import { Component, OnInit } from '@angular/core';
import { ConditionService } from 'src/app/service/condition.service';
import { Condition } from 'src/app/model/Condition';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-condition',
  templateUrl: './condition.component.html',
  styleUrls: ['./condition.component.css']
})
export class ConditionComponent implements OnInit {
condition:Condition[];
  constructor(private conditionService:ConditionService,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
    return this.conditionService.getCondition().subscribe((data:any)=>{
      this.condition=data;
    },(error)=>{
      console.log(error);
    })
  }
  updateCondition(condition:Condition){
    this.conditionService.setter(condition);
    this.router.navigate(['updateCondition']);
  }
  deleteCondition(condition:Condition){
    if(confirm('are you sure to delete this record ?')){
      this.conditionService.deleteCondition(condition.conditionId).subscribe((data)=>{
        this.condition.splice(this.condition.indexOf(condition),1);
        this.toastr.success('Delete Successfully','Condition');

      })
    }
  }

}
