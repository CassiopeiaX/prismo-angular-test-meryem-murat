import { Component, OnInit } from '@angular/core';
import { MembersService } from '../service/members-list.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-member-profil',
  templateUrl: './member-profil.component.html',
  styleUrls: ['./member-profil.component.scss']
})
export class MemberProfilComponent implements OnInit {

  dataObject :any=[];
  route :any;

  constructor(private service:MembersService,private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.service.getData()
      .subscribe(resData=>this.dataObject =resData);
    this.route = this.router.snapshot.paramMap.get("id");
    console.log(this.route);
  }

}
