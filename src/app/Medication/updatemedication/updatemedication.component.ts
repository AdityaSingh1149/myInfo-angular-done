import { Component, OnInit } from '@angular/core';
import { Medication } from 'src/app/model/medication';
import { MedicationService } from 'src/app/service/medication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-updatemedication',
  templateUrl: './updatemedication.component.html',
  styleUrls: ['./updatemedication.component.css']
})
export class UpdatemedicationComponent implements OnInit {
  medication:Medication;

  constructor(private router:Router, private meadcationservice:MedicationService,private location:Location,private toastr:ToastrService) { }

  ngOnInit() {
    this.medication=this.meadcationservice.getter();
  }

  backclicked(){
    this.location.back();
    this.toastr.warning('Not Update Successfully','Meadcation')
  }
  onSubmit(){
    this.location.back();
    this.meadcationservice.updatemedication(this.medication).subscribe((data)=>{
      this.toastr.success('Update successfully','Meadcation');
      this.router.navigate(['meadication']);
      console.log(data);
    },(error)=>{
     console.log(error);
    })
  }
}
