import { Component, OnInit } from '@angular/core';
import { MembersService } from '../service/members-list.service';

import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss']
})
export class MemberCardComponent implements OnInit {

  dataObject :any=[];

  constructor(private service:MembersService) { }

  ngOnInit(): void {
    this.service.getData()
      .subscribe(resData=>{this.dataObject =resData;console.log(this.dataObject)});
}

}
