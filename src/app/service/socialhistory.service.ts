import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SocialHistory } from '../model/socialhistory';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SocialhistoryService {
socialhistory:SocialHistory=new SocialHistory();
getUrl="http://localhost:8181/getSocialHistory";
updateUrl="http://localhost:8181/updateSocialHistory";
deleteUrl="http://localhost:8181/deleteSocialHistory";
  constructor(private http:HttpClient) { }
  private socialHistory:SocialHistory;
  private router:Router;
  getSocialHistory(){
    return this.http.get<SocialHistory[]>(this.getUrl);
  }
  deleteSocialHistory(socialHistoryId:number)
   {
    console.log(socialHistoryId);
    console.log(`${this.deleteUrl}/${socialHistoryId}`);
    return this.http.delete(`${this.deleteUrl}/${socialHistoryId}`);
  }
  updateSocialHistory(socialHistory:SocialHistory){
    return this.http.put<SocialHistory>(this.updateUrl,socialHistory);
  }
  setter(socialHistory:SocialHistory){
    this.socialHistory=socialHistory;
  }getter(){
    return this.socialHistory;
  }
}
