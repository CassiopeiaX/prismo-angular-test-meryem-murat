import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class MembersService {

  public dataObject :any[];

  constructor(private http: Http) { }

 private url="./assets/members.json";

public getData(){
  return this.http.get(this.url)
  .pipe(map((response:Response)=>{ return response.json()}));
    // ));

}





}
