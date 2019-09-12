import { Component, OnInit } from '@angular/core';
import { Location  } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

import { Router, ActivatedRoute } from '@angular/router';
import { SocialhistoryService } from 'src/app/service/socialhistory.service';
import { SocialHistory } from 'src/app/model/socialhistory';

@Component({
  selector: 'app-updatesocialhistory',
  templateUrl: './updatesocialhistory.component.html',
  styleUrls: ['./updatesocialhistory.component.css']
})
export class UpdatesocialhistoryComponent implements OnInit {

  constructor(private tostr:ToastrService, private location:Location, private route: ActivatedRoute,private socialHistoryService:SocialhistoryService,private router:Router) { }
   socialHistory:SocialHistory;

  ngOnInit() {
    this.socialHistory=this.socialHistoryService.getter();

  }
  onSubmit()
  {
    console.log("hello");
    this.socialHistoryService.updateSocialHistory(this.socialHistory).subscribe(data=>console.log(data),error=>console.log(error));
    this.tostr.success('Update Successfully','SocialHistory');
    this.router.navigate(['socialhistory']);
  }
  backclicked(){
    this.location.back();
    this.tostr.warning('Not Update','SocialHistory');
  }
}
