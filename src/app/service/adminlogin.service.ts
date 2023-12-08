import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export const auth_header = 'authorization';

@Injectable({
  providedIn: 'root'
})
export class AdminloginService {
  

  constructor(private http : HttpClient) { }
 

  public loginmethd(userlogindata : any){
      return this.http.post("http://localhost:8080/users/login",userlogindata)
  }

  public studentmethod(studentdata : any){
    return this.http.post("http://localhost:8080/api/admin/poststudent",studentdata)
  }

  public teachermethod(teacherdata : any){
    return this.http.post("http://localhost:8080/api/admin/postteacher",teacherdata)
  }
//login user:set token user
   public loginUser(token: any,id:any){
    // in this way we store token from retun value from backend
    localStorage.setItem('token',token);
    localStorage.setItem('id',id)
    return true ;
  }

  //isLogin:user is login or not
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token')
    if(tokenStr==undefined||tokenStr==''|| tokenStr==null){
      return false;
    }else{
      return true;
    }
  }

  //logout:remove token from local stroage
  public logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('id')
  }
  public getToken(){
    return localStorage.getItem('token');

}
public getId(){
  return localStorage.getItem('id')
}

}
