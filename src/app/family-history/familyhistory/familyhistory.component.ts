import { Component, OnInit } from '@angular/core';
import {  PatientsService } from 'src/app/service/familyHistory.service';
import { Router } from '@angular/router';
import { FamilyHistory } from 'src/app/model/familyHistory';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-familyhistory',
  templateUrl: './familyhistory.component.html',
  styleUrls: ['./familyhistory.component.css']
})
export class FamilyhistoryComponent implements OnInit {
  familyHistory: FamilyHistory[];

  constructor(private tostr:ToastrService, private patientService: PatientsService, private router: Router) { }

  ngOnInit() {
    this.getfamilyHistory();

  }
  getfamilyHistory() {
    return this.patientService.getPatients().subscribe((data:any)=>{
      this.familyHistory=data;
      console.log(data);
    },(error)=>{
      console.log(error);
    })
  }

  deletefamilyHistory(familyHistory:FamilyHistory) {
    return this.patientService.deletePatient(familyHistory.familyHistoryId).subscribe((data)=>{
      this.familyHistory.splice(this.familyHistory.indexOf(familyHistory),1);
      this.tostr.success('Delete Successfully','FamilyHistory');
      console.log(data);

    })
  }
  updatefamilyHistory(familyHistory: FamilyHistory) {
    this.patientService.setter(familyHistory);
    return this.router.navigate(['Updatefamilyhistory']);
  }

}
