import { Component, OnInit } from '@angular/core';
import { MedicationService } from 'src/app/service/medication.service';
import { Medication } from 'src/app/model/medication';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
medication:Medication[];
  constructor(private medicationService:MedicationService) { }

  ngOnInit() {
    return this.medicationService.getMedication().subscribe((data:any)=>{
      this.medication=data;
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }

}
