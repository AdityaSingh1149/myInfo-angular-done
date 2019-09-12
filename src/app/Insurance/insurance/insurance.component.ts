import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/service/insurance.service';
import { Insurance } from 'src/app/model/insurance';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
insurance:Insurance[];
  constructor(private insuranceService:InsuranceService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    return this.insuranceService.getInsurance().subscribe((data:any)=>{
      this.insurance=data;
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }
  updateInsurance(insurance:Insurance){
    this.insuranceService.setter(insurance);
    this.router.navigate(['updateinsurance']);
  }

  deleteInsurance(insurance:Insurance){
    if(confirm('are you sure to delete this record ?')){
      this.insuranceService.deleteInsurance(insurance.insuranceId).subscribe((data)=>{
      console.log("id"+insurance.insuranceId);

        this.insurance.splice(this.insurance.indexOf(insurance),1);
        this.toastr.success('Delete Successfully','Insurance');
      },(error)=>{
        console.log(error);
      })
    }
  }

}
