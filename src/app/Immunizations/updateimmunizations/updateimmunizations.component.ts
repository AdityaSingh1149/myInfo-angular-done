import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { ImmunizationsService } from 'src/app/service/immunizations.service';
import { Immunizations } from 'src/app/model/immunizations';
@Component({
  selector: 'app-updateimmunizations',
  templateUrl: './updateimmunizations.component.html',
  styleUrls: ['./updateimmunizations.component.css']
})
export class UpdateimmunizationsComponent implements OnInit {
  immunization:Immunizations;
  constructor(private location:Location, private immunizationService:ImmunizationsService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.immunization=this.immunizationService.Getter();
  }
  backclicked(){
    this.location.back();
    this.toastr.warning('Not Update','Immunization');
  }
  onSubmit(){
    this.immunizationService.updateImmunizations(this.immunization).subscribe((data)=>{
      console.log(data);
      this.toastr.success('Update Successfully','Immunization');
      this.router.navigate(['immunization']);
    })
  }
}
