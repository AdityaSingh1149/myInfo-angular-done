import { Component, OnInit } from '@angular/core';
import { PatientsService } from 'src/app/service/familyHistory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FamilyHistory } from 'src/app/model/familyHistory';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-updatefamilyhistory',
  templateUrl: './updatefamilyhistory.component.html',
  styleUrls: ['./updatefamilyhistory.component.css']
})
export class UpdatefamilyhistoryComponent implements OnInit {
  id: number;
  familyHistory: FamilyHistory;
  constructor(private tostr:ToastrService, private location: Location, private route: ActivatedRoute, private patientService: PatientsService, private router: Router) { }

  ngOnInit() {
    this.familyHistory = this.patientService.getter();

  }
  onSubmit() {
    console.log('hello');
    this.patientService.updatePatient(this.familyHistory).subscribe((data)=>{
      this.familyHistory=data;
      this.tostr.success('Update Successfully','FamilyHistory');
    this.router.navigate(['familyhistory']);

    },(error)=>{
      console.log(error);
    }
    )
  }
  backclicked() {
    this.location.back();
    this.tostr.warning('Not Update','FamilyHistory');
  }


}
