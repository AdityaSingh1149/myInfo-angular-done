import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vitals } from '../model/vitals';

@Injectable({
  providedIn: 'root'
})
export class VitalsService {
  vitals:Vitals=new Vitals();
private getUrl="http://localhost:8181/getVitals";
private deleteUrl="http://localhost:8181/deleteVitals";
private updateUrl="http://localhost:8181/updateVitals";

  constructor(private http:HttpClient) { }

  getVitals(){
    console.log(this.getUrl);
      return this.http.get(this.getUrl);
  }
  deleleVitals(id:number)
  {
    console.log(`${this.deleteUrl}/${id}`);
      return this.http.delete(`${this.deleteUrl}/${id}`);
  }
  setter(vitals:Vitals)
  {
    this.vitals=vitals;
  }
  getter()
  {
    return this.vitals;
  }
  updateVitals(vitals:Vitals){
    return this.http.put(this.updateUrl,vitals);
  }
}
