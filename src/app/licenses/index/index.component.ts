import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SaveLicenseService } from '../save-license.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  routes:any;
  constructor(private saveLicense:SaveLicenseService) {
    this.routes = [
      {route:"",name:"Default",selected:true},
      {route:"simp",name:"SIMP",selected:false}
    ]
   }

  ngOnInit(): void {

  }

  saveLicenseClick():void{
    this.saveLicense.saveLicense().subscribe(data=>{
      console.warn(data);
    });
  }

  //to change the style of li elements to selected or not
  checkRoute(newOption:string):void{
    let oldOption = this.routes.find((name:any)=>{
      return name.selected == true;
    });

    for(let i=0;i<this.routes.length;i++){
      if(this.routes[i].name == oldOption.name){
        this.routes[i].selected = false;
      }else if(this.routes[i].name == newOption){
        this.routes[i].selected = true;
      }
    }

  }

}
