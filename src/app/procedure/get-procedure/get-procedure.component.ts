import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ProcedureService } from 'src/app/service/procedure.service';
import { Procedure } from 'src/app/model/Procedure';
@Component({
  selector: 'app-get-procedure',
  templateUrl: './get-procedure.component.html',
  styleUrls: ['./get-procedure.component.css']
})
export class GetProcedureComponent implements OnInit {
procedure:Procedure[];
  constructor(private procedureService:ProcedureService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.getProcedure();
  }
  getProcedure(){
    return this.procedureService.getProcedure().subscribe((data:any)=>{
      this.procedure=data;
    },(error)=>{
      console.log(error);
    })
  }
  updateProcedure(procedure:Procedure){
    console.log("error");
    this.procedureService.Setter(procedure);
    this.router.navigate(['updateprocedure']);
  }

  deleteprocedure(procedure:Procedure){
    if(confirm('are you sure delete this record')){
      return this.procedureService.deleteprocedure(procedure.procedureId).subscribe((data)=>{
        this.toastr.success('Delete Successfully','Procedure');
        this.procedure.splice(this.procedure.indexOf(procedure),1);

      })
    }
  }

}
