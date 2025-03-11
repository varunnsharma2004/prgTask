import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { release } from 'os';
import { DataService } from '../../services/data.service';
import { CommonModule, DatePipe } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import { fakeAsync } from '@angular/core/testing';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-remove',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add-remove.component.html',
  styleUrl: './add-remove.component.css'
})
export class AddRemoveComponent {
addMovie:FormGroup;
movieData:any=[];
constructor(private data:DataService,private datePipe: DatePipe){
this.addMovie=new FormGroup({ 
  name:new FormControl('',[Validators.required]),
  releaseDate:new FormControl(false),
  release:new FormControl('',[Validators.required]),
  actores:new FormControl('',[Validators.required]),
  link:new FormControl('',[Validators.required]),
  comment:new FormControl(''),
  rating:new  FormControl(0),
})
data.movies.subscribe(rs=>this.movieData=rs);

}
onDateChange(event: any) {
  let inputDate = event.target.value;  
  if (inputDate) {
    let formattedDate = this.datePipe.transform(inputDate, 'dd/MM/yyyy');
    this.addMovie.get('releaseDate')?.setValue(formattedDate, { emitEvent: false });
  }
}
createMovie(){
  if(this.addMovie.valid){

    let actors=this.addMovie.get('actores')?.value.split(',');
    let obj=  {
      id:uuidv4(),
     name:this.addMovie.get('name')?.value,
     relaseDate:this.addMovie.get('releaseDate')?.value,
     image:'',
     actors:actors,
     release:this.addMovie.get('release')?.value==1?true:false     ,
     link:this.addMovie.get('link')?.value,
     comment: this.addMovie.get('comment')?.value,   
     rating: this.addMovie.get('rating')?.value   }
   
   this.movieData.push(obj);
   this.data.movies.next(this.movieData);
    Swal.fire({
         title: "Movie Added",
         text: "Your Movie has been Added.",
         icon: "success",
         timer: 1500,
         showConfirmButton:false
    }).then(es=>{
      this.data.isPopUp=false;
      this.addMovie.reset();
    })
 
   

   
  }
}
}
