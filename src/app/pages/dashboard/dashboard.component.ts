import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,CommonModule,FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  movieData:any=[]
constructor(private data:DataService){
  this.data.movies.subscribe(rs=>this.movieData=rs);
}
updateRating(id:any,value:any){

  this.movieData=this.movieData.map((rs:any)=>{
    if(rs.id==id){
rs.rating=value;
    }
    return rs;
  })
  console.log(this.movieData)
}
}
