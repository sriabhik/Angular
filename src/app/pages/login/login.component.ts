import { Component } from '@angular/core';
import { AdminloginService } from '../../service/adminlogin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  userdata = {
    email:'',
    password:''

  }
  constructor(private loginservice : AdminloginService,private router : Router){}
  
  onSubmit() {
    this.loginservice.loginmethd(this.userdata).subscribe((data:any)=>{
      console.log(data);
     
      this.router.navigateByUrl('/welcome')
      this.loginservice.loginUser(data.jwtToken,data.id);
    })
    // Here, you would typically send a request to your backend for authentication
    // For simplicity, we'll just log the entered credentials to the console.
    //console.log('Username:', this.username);
    //console.log('Password:', this.password);
  }
  
  
}
