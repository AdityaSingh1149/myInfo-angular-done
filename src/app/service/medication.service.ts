import { Injectable } from '@angular/core';
import { Medication } from '../model/medication';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicationService {
  medication:Medication=new Medication();
  geturl="http://localhost:8181/getMedications";
  deleteurl="http://localhost:8181/deleteMedications";
  updateUrl="http://localhost:8181/updateMedications";
  constructor(private http:HttpClient) { }

  getMedication(){
    console.log(this.geturl);
    return this.http.get(this.geturl);
  }
  deleteMedication(id:number){
    console.log(`${this.deleteurl}/${id}`);
    return this.http.delete(`${this.deleteurl}/${id}`,{responseType:'text'});
  }
  updatemedication(medication:Medication){
    console.log("update s");
    console.log(this.updateUrl,medication);
    return this.http.put(this.updateUrl,medication);
  }
  setter(medication:Medication){
    this.medication=medication;
  }
  getter(){
    return this.medication;
  }
}
