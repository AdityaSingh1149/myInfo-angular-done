import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlanOfTreatement } from '../model/PlanOfTreatement';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PlanOfTreatementService {
  planoftreatement:PlanOfTreatement=new PlanOfTreatement();
  geturl="http://localhost:8181/getPlanOfTreatment";
  deleteurl="http://localhost:8181/deletePlanOfTreatement";
  updateUrl="http://localhost:8181/updatePlanOfTreatement";
  constructor(private http:HttpClient) { }

  getPlanOfTreatement(){
    console.log(this.geturl);
    return this.http.get(this.geturl);
  }
  deletePlanoftreatement(id:number){
    console.log(`${this.deleteurl}/${id}`);
    return this.http.delete(`${this.deleteurl}/${id}`,{responseType:'text'});
  }
  updateplanOfTreatement(planoftreatement:PlanOfTreatement)
  {
    console.log("update s");
    console.log(this.updateUrl,planoftreatement);
    return this.http.put(this.updateUrl,planoftreatement);
  }
  setter(planoftreatement:PlanOfTreatement)
  {
    this.planoftreatement=planoftreatement;
  }
  getter()
  {
    return this.planoftreatement;
  }
}
