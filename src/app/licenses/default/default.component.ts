import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  name:string = "Pedrito Perez";
  note:string = "Es otaku juega al lol y se baña una vez al mes!";
  date:string = "2001-07-15";
  constructor() { }

  ngOnInit(): void {
  }

}
