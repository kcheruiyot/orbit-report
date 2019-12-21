import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';
@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {
@Input() satellites: Satellite[];
  constructor() { 
  this.total= 0;
  this.spaceDebris = 0;
  this.communication = 0
  this.probe = 0;
  this.positioning = 0;
  this.spaceStation = 0;
  this.telescope = 0;
  }
  total:number;
  spaceDebris:number;
  communication:number;
  probe:number;
  positioning:number;
  spaceStation:number;
  telescope:number;
  count():void{
    this.total= 0;
  this.spaceDebris = 0;
  this.communication = 0
  this.probe = 0;
  this.positioning = 0;
  this.spaceStation = 0;
  this.telescope = 0;
    this.total = this.satellites.length;
    for(let i = 0; i < this.total; i++ ){
      if(this.satellites[i].type.toLowerCase()==="space debris"){
      this.spaceDebris++;
      }else if(this.satellites[i].type.toLowerCase()==="communication"){
        this.communication++;
      }
      else if(this.satellites[i].type.toLowerCase()==="probe"){
      this.probe++;
      }
      else if(this.satellites[i].type.toLowerCase()==="positioning"){
      this.positioning++;
      }
      else if(this.satellites[i].type.toLowerCase()==="space station"){
      this.spaceStation++;
      }
       else if(this.satellites[i].type.toLowerCase()==="telescope"){
      this.telescope++;
      }
      
    }
  }
  ngOnInit() {
  }

}
