import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FamilyHistory } from '../model/familyHistory';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  getUrl = 'http://localhost:8181/getFamilyHistory';
  deleteUrl = 'http://localhost:8181/deleteFamilyHistory';
  updateUrl = 'http://localhost:8181/updateFamilyHistory';
private familyHistory: FamilyHistory;

  constructor(private http:HttpClient) { }
  getPatients()
  {
    console.log(this.getUrl);
    return this.http.get<FamilyHistory[]>(this.getUrl);
  }
 deletePatient(id: number)
 {
   console.log(id);
   console.log(`${this.deleteUrl}/${id}`);
   return this.http.delete(`${this.deleteUrl}/${id}`);
//  return this.http.delete<Vitals>(this.deleteClient,id);
 }
 updatePatient( familyHistory: FamilyHistory)
 {
   console.log(familyHistory);
   return this.http.put<FamilyHistory>( this.updateUrl, familyHistory);
 }
 setter(familyHistory: FamilyHistory) {
   this.familyHistory = familyHistory;
 }
 getter()
 {
   return this.familyHistory;
 }
}
