import { Component, OnInit } from '@angular/core';
import { MembersService } from '../service/members-list.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  dataObject :any=[];

  constructor(private service:MembersService) { }
  // constructor() { }

  ngOnInit() {
      this.service.getData()
      .subscribe(resData=>this.dataObject =resData);
    console.log(this.dataObject)

    }
  }


