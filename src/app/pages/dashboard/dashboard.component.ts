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
rows = [
  { name: 'John Doe', age: 25, company: 'Google' },
  { name: 'Jane Smith', age: 30, company: 'Microsoft' },
  { name: 'Bob Johnson', age: 35, company: 'Apple' }
];

columns = [
  { prop: 'name' },
  { name: 'Age', prop: 'age' },
  { name: 'Company', prop: 'company' }
];
}
