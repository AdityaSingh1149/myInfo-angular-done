import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Immunizations } from '../model/immunizations';

@Injectable({
  providedIn: 'root'
})
export class ImmunizationsService {
getUrl="http://localhost:8181/getImmunizations";
updateUrl="http://localhost:8181/updateImmunizations";
deleteUrl="http://localhost:8181/deleteImmunizations";
immunizations:Immunizations=new Immunizations();
  constructor(private http:HttpClient) { }

  getImmu(){
    console.log(this.getUrl);
    return this.http.get(this.getUrl);
  }
  updateImmunizations(immunizations:Immunizations)
  {
    console.log(this.updateUrl,immunizations);
    
    return this.http.put(this.updateUrl,immunizations);
  }
  deleteImmunizations(id:number){
    
    console.log(`${this.deleteUrl}/${id}`);
    return this.http.delete(`${this.deleteUrl}/${id}`);
  }
  Setter(immunizations:Immunizations){
    this.immunizations=immunizations;
  }
  Getter(){
    return this.immunizations;
  }
}
