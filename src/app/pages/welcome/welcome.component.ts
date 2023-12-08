import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Init } from 'v8';
import { AdminloginService } from '../../service/adminlogin.service';



@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})

  
export class WelcomeComponent implements OnInit{
 userdata : any
  constructor(  private router: Router,private login:AdminloginService) {}
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
  logout(){
    this.login.logout();
    this.router.navigateByUrl('/login')
  } 
  }

