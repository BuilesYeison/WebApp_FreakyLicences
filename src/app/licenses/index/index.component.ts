import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  routes:any;
  constructor(private router:Router) {
    this.routes = [
      {route:"",name:"Default",selected:true},
      {route:"simp",name:"SIMP",selected:false}
    ]
   }

  ngOnInit(): void {
  }

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
