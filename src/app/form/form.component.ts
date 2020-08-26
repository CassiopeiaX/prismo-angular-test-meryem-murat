import { Component, OnInit } from '@angular/core';
import { MembersService } from '../service/members-list.service';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  dataObject :any=[];
  url="./assets/members.json";

  constructor(private service:MembersService, private http:Http) { }

  ngOnInit() {
      this.service.getData()
      .subscribe(value=>this.dataObject =value);
    console.log(this.dataObject)

    }

   onFormSubmit(userForm:NgForm){
    this.dataObject.push({id: this.dataObject.length+1, firstname: userForm.form.value.firstname, lastname: userForm.form.value.name, avatar: userForm.form.value.avatar, function: userForm.form.value.job, description : userForm.form.value.desc});

    this.http.post(this.url,this.dataObject)


     console.log(this.dataObject);
   }

}
