import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Init } from 'v8';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

  
export class WelcomeComponent implements OnInit{
 userdata : any
  constructor(  private router: Router) {}
  ngOnInit() {
   //get all student 
  }
  addstudent(){
    //console.log("inside add");
    //this.addservice1.studentmethod1(this.router).subscribe((data:any)=>{
      this.router.navigateByUrl('/addstudent')
    //})
  }
  addteacher(){
    this.router.navigateByUrl('/addteacher')
  }
  }

