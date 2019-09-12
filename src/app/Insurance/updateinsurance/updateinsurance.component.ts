import { Component, OnInit } from '@angular/core';
import { InsuranceService } from 'src/app/service/insurance.service';
import { Insurance } from 'src/app/model/insurance';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-updateinsurance',
  templateUrl: './updateinsurance.component.html',
  styleUrls: ['./updateinsurance.component.css']
})
export class UpdateinsuranceComponent implements OnInit {
insurance:Insurance;
  constructor(private insuranceService:InsuranceService,private location:Location,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.insurance=this.insuranceService.getter();
    console.log(this.insurance.insuranceId);
  }
  onSubmit(){
    return this.insuranceService.updateInsurance(this.insurance).subscribe((data)=>{
      console.log(data);
      this.toastr.success('Update Successfully','Insurance');
      this.router.navigate(['insurance']);
    },(error)=>{
      console.log(error);
    })
  }
  backclicked(){
    this.location.back();
    this.toastr.warning('Not Update','Insurance');
  }

}
