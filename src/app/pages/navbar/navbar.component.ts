import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { AddRemoveComponent } from "../add-remove/add-remove.component";
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, AddRemoveComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
 path:any=''
 role:any=''
 isPopUp=false;
  constructor(private router:Router ,private store:StoreService,public data:DataService){
    const currentPath = window.location.pathname;
this.role=this.store.getuserRole();
console.log(this.role)
     
    this.path = currentPath.split('/')[1];  
  }
  logout(){
    this.router.navigate(['login'])
    this.store.removeRole();
  }
  moveDashBoard()
  {
this.router.navigate(['dashboard']);
  }
  moveAdmin()
  {
    this.router.navigate(['admin-board'])
  }
  showPopUp(){
     
    this.data.isPopUp=true;
  }
  close()
  {
    this.data.isPopUp=false;
  }
}
