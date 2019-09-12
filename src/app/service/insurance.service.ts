import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Insurance } from '../model/insurance';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {
  getUrl="http://localhost:8181/getInsurance";
  deleteUrl="http://localhost:8181/deleteInsurance";
  updateurl="http://localhost:8181/updateInsurance";
  insurance:Insurance=new Insurance();
  constructor(private http:HttpClient) { }
  getInsurance(){
    return this.http.get(this.getUrl);
  }
  deleteInsurance(id:number){
    console.log(id);
    console.log(`${this.deleteUrl}/${id}`);
    return this.http.delete(`${this.deleteUrl}/${id}`);
  }
  setter(insurance:Insurance){
      this.insurance=insurance;
  }
  getter(){
    return this.insurance;
  }
  updateInsurance(insurance:Insurance){
    console.log(this.updateurl);
    return this.http.put(this.updateurl,insurance);
  }
}
