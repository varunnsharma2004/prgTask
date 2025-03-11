import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-board',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './admin-board.component.html',
  styleUrl: './admin-board.component.css'
})
export class AdminBoardComponent {
  movieData:any=[]
constructor(private router:Router,private data:DataService){
  this.data.movies.subscribe(rs=>this.movieData=rs);
}
deleteMovie(id:any){

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be Delete this Movie!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "Your Movie has been deleted.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
      this.movieData=this.movieData.filter((rs:any)=>rs.id!==id)
    }
  });
 
  
}
releaseMovie(id:any)
{

let data=this.movieData.map((rs:any)=>{
if(rs.id==id)
  
Swal.fire({
  title: "Are you sure?",
  text: "You won't be Release this Movie!",
  icon: "success",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, Release it!"
}).then((result) => {
  if (result.isConfirmed) {
    let rDate=this.convertToDate(rs.relaseDate)
  debugger
    if(new Date()>=rDate){
      debugger
      rs.release=true;
    Swal.fire({
      title: "Release!",
      text: "Your Movie has been Released.",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });}
    else{
      Swal.fire({
        title: "Not Released!",
        text: "Release date is graterthen current data.",
        icon: "error",
        timer: 1500,
        showConfirmButton: false})
    }
  }
});

return rs;
})
console.log(data);
debugger;
}
convertToDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split('/');
  return new Date(+year, +month - 1, +day);   
}
}
