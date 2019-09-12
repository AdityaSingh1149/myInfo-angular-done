import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SocialHistory } from 'src/app/model/socialhistory';
import { SocialhistoryService } from 'src/app/service/socialhistory.service';

@Component({
  selector: 'app-socialhistory',
  templateUrl: './socialhistory.component.html',
  styleUrls: ['./socialhistory.component.css']
})
export class SocialhistoryComponent implements OnInit {
  socialhistory: SocialHistory[];
  constructor(private socialHistoryService:SocialhistoryService,private router:Router) { }

  ngOnInit() {
    this.getSocialHistory();
  }
  getSocialHistory(){
    return this.socialHistoryService.getSocialHistory().subscribe(data=>this.socialhistory=data);
  }
  deleteSocialHistory(socialHistoryId:number){
    return this.socialHistoryService.deleteSocialHistory(socialHistoryId).subscribe(
      data=>{this.socialhistory=this.socialhistory.filter(v=>v)}
    );
    
  }
  updateSocialHistory(socialHistory:SocialHistory){
    this.socialHistoryService.setter(socialHistory);
    return this.router.navigate(['/updateSocialHistory']);
  }
}
