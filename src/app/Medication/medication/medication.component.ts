import { Component, OnInit } from '@angular/core';
import { Medication } from 'src/app/model/medication';
import { MedicationService } from 'src/app/service/medication.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medication',
  templateUrl: './medication.component.html',
  styleUrls: ['./medication.component.css']
})
export class MedicationComponent implements OnInit {
  medication:Medication[];

  constructor(private medicationService:MedicationService,private toastr:ToastrService,private router:Router) { }

  ngOnInit() {
    this.getmedication();
  }
  getmedication(){
    return this.medicationService.getMedication().subscribe((data:any)=>{
      this.medication=data;
    },(error)=>{
      console.log(error);
   })
  }
   updateMedication(medication:Medication){
     this.medicationService.setter(medication);
     this.router.navigate(['updatemedication']);
   }
   deletemedication(medication:Medication){
     if(confirm('are you sure to delete this record ? ')){
       this.medicationService.deleteMedication(medication.id).subscribe((data)=>{
         this.medication.splice(this.medication.indexOf(medication),1);
         this.toastr.success('Deleted successfully', 'User');
         
 
       },(error)=>{
         console.log(error);
       })
     }
   }
}
