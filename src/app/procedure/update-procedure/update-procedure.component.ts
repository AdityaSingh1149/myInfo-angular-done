import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProcedureService } from 'src/app/service/procedure.service';
import { Procedure } from 'src/app/model/Procedure';
@Component({
  selector: 'app-update-procedure',
  templateUrl: './update-procedure.component.html',
  styleUrls: ['./update-procedure.component.css']
})
export class UpdateProcedureComponent implements OnInit {
procedure:Procedure;
  constructor(private router:Router, private procedureService:ProcedureService,private toastr:ToastrService,private location:Location) { 

  }

  ngOnInit() {
    this.procedure=this.procedureService.getter();
  }
  backclicked(){
    this.location.back();
    this.toastr.warning('Not Update','Procedure');
  }
  onSubmit(){
    this.procedureService.updateProcedure(this.procedure).subscribe((data)=>{
      this.toastr.success('Update Successfully','Procedure');
      this.router.navigate(['procedures']);
    },(error)=>{
      console.log(error);
    })


  }
}
