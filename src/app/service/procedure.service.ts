import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Procedure } from '../model/Procedure';

@Injectable({
  providedIn: 'root'
})
export class ProcedureService {
  getUrl="http://localhost:8181/getProcedure";
  deleteUrl="http://localhost:8181/deleteProcedure";
  updateUrl="http://localhost:8181/updateProcedure";
  procedure:Procedure=new Procedure();
  constructor(private http:HttpClient) { }

  getProcedure(){
    return this.http.get(this.getUrl);
  }

  updateProcedure(procedure:Procedure){
    return this.http.put(this.updateUrl,procedure);
  }
  deleteprocedure(id:number){
    return this.http.delete(`${this.deleteUrl}/${id}`);
  }

  Setter(procedure:Procedure)
  {
    this.procedure=procedure;
  }
  getter(){
    return this.procedure;
  }

}
