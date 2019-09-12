import { Component, OnInit } from '@angular/core';
import { Vitals } from 'src/app/model/vitals';
import { VitalsService } from 'src/app/service/vitals.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-vitals',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {
vitals:Vitals[];
  constructor(private vitalService:VitalsService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.getVitals();
  }
  getVitals(){
    return this.vitalService.getVitals().subscribe((data:any)=>{
      this.vitals=data;
    },(error)=>{
      console.log(error);
    })
  }
  updateVitals(vitals:Vitals)
  {
    this.vitalService.setter(vitals);
    this.router.navigate(['updatevitals']);

  }
  deleteVitals(vitals:Vitals){
    if(confirm('Are you sure to delete this record ?')){
      this.vitalService.deleleVitals(vitals.id).subscribe((data)=>{
        this.vitals.splice(this.vitals.indexOf(vitals),1);
        this.toastr.success('delete Successfully','Vitals');
      },(error)=>{
        console.log(error);
      })
    }
  }
}
