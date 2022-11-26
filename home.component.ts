import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

isToggle:boolean=true;
isToggle2:boolean=true;
isToggle3:boolean=true;
isImage:boolean=true;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  // clickEvent(){
  //   this.isToggle =! this.isToggle;
  // }
  // clickEvent2(){
  //   this.isToggle2 =! this.isToggle2;
  // }
   clickImage(){
     this.isImage =! this.isImage;
   }
  // clickEvent3(){
  //   this.isToggle3 =! this.isToggle3;
  // }

  
}
