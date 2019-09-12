import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Condition } from '../model/Condition';

@Injectable({
  providedIn: 'root'
})
export class ConditionService {
  condition:Condition=new Condition();
private geturl="http://localhost:8181/selectConditions";
private deleteurl="http://localhost:8181/deleteCondition";
private updateurl="http://localhost:8181/updateCondition"
  constructor(private http:HttpClient) { }

  getCondition(){
    console.log(this.geturl);
    return this.http.get(this.geturl);
  }
  deleteCondition(id:number){
    console.log(id);
    return this.http.delete(`${this.deleteurl}/${id}`);
  }
  setter(condition:Condition){
    this.condition=condition;
  }
  getter(){
    return this.condition;
  }
  updateCondition(condition:Condition){
    return this.http.put(this.updateurl,condition);
  }
}
