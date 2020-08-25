import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({providedIn: 'root'})

export class MembersService {

 private url="./assets/members.json";

 constructor(private http: Http) {

}

public getData(){
  return this.http.get(this.url)
  .pipe(map((response:Response)=>{ return response.json();}));
    // ));

}



}
