import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
    var lien = this.router.url;
  }

    isTrueRoute = false;
    isFalseRoute = true;

    if(lien='/welcome'){
      this.isTrueRoute=true;
      this.isFalseRoute=false;
    }

  ngOnInit(): void {

  }

}
