import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import Swal from 'sweetalert2'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm:FormGroup;

  constructor(public appSevice:AppService,private router:Router){
this.loginForm=new FormGroup({
  userName:new FormControl('',[Validators.required]),
  password:new FormControl('',[Validators.required]),
})
  }

isLogin()
{
  
  let userdata=this.appSevice.userLogin(this.loginForm.value);
  debugger;
  if(userdata){
userdata?.role=="admin"?this.router.navigate(['admin-board']):this.router.navigate(['dashboard'])
  }
  else{
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please Check Your UserName and Password",
      showConfirmButton: false,
      timer: 1500
    }).then((rs)=>location.reload());
  }
}
}
