import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isLogin:boolean=false;
  constructor(private data: DataService) { }

  userLogin(auth: any) {
    if (auth) {
      const userdata = this.data.userData.find(
        rs => rs.username === auth.userName && rs.password === auth.password
      );
       
      if (userdata) return userdata;
   
      return null;
    }
    return null;
  }
 
}