import { Component } from '@angular/core';

import { Router } from '@angular/router';

import { AdminloginService } from '../../service/adminlogin.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrl: './addstudent.component.css'
})
export class AddstudentComponent {

studentdata ={
  name:'',
  email:'',
  password:'',
  mobileNumber:'',
  address:'',
  gender:'',
  user :{
    id : ''
  }
}
constructor(private studentpost : AdminloginService,private router : Router){}

onSubmit(){
  
  this.studentdata.user.id=JSON.parse(localStorage.getItem('id') || '{}');
  this.studentpost.studentmethod(this.studentdata).subscribe((data1:any)=>{
    console.log(data1);
  })
  this.router.navigateByUrl('/welcome')
}
}
