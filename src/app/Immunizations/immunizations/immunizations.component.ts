import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ImmunizationsService } from 'src/app/service/immunizations.service';
import { Immunizations } from 'src/app/model/immunizations';
@Component({
  selector: 'app-immunizations',
  templateUrl: './immunizations.component.html',
  styleUrls: ['./immunizations.component.css']
})
export class ImmunizationsComponent implements OnInit {
  immunizations:Immunizations[];
  constructor(private immunizationsService:ImmunizationsService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
    this.getimmunizations();
  }
  getimmunizations(){
    return this.immunizationsService.getImmu().subscribe((data:any)=>{
      this.immunizations=data;
    },(error)=>{
      console.log(error);
    })
  }

  updateImmunizations(immunizations :Immunizations)
  {
    this.immunizationsService.Setter(immunizations);
    this.router.navigate(['updateImmunizations']);
  }
  deleteImmunizations(immunizations:Immunizations)
  {
    if(confirm('are you sure delete this record')){
      this.immunizationsService.deleteImmunizations(immunizations.id).subscribe((data)=>{
        this.toastr.success('Delete Successfully','Immunization');
      this.immunizations.splice(this.immunizations.indexOf(immunizations),1);
      },(error)=>{
        console.log(error);
      })
      
    }
  }
}
