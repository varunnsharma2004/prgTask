import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common'; 
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  movieData:any=[]
constructor(private data:DataService){
  this.data.movies.subscribe(rs=>this.movieData=rs);
}
 
}
