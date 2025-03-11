import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { } 
  isPopUp=false;
  userData=[{ 
    username:"user@gmail.com",
    password:"user@1234",
    role:"user",
    number:8975468532
  },
  { 
    username:"admin@gmail.com",
    password:"admin@1234",
    role:"admin",
    number:8975468532
  }]

  movie=[{
    id:1,
    name:'chaava',
    relaseDate:"14/2/2025",
    image:"chaava.jpeg",
    actors:['Vicky Kaushal',"Rashmika Mandanna","Akshaye Khanna","Ashutosh Rana","Divya Datta","Diana","Veenit Kumar"],
    release:true,
    link:'https://www.youtube.com/watch?v=nsC5PhXS19Y',
    comment: '',
    rating: 0
  },
  {
    id:2,
    name:'Deva',
    relaseDate:"31/1/2025",
    image:'deva.jpeg',
    actors:['Shahid Kapoor',"Pooka Hegde","Kubbra Sait","Pavail Gulati","Pravesh Rana","Manish Wadhva","Upendra Limaye"],
    release:true,
    link:'https://www.youtube.com/watch?v=3x77q40hATw',
    comment: '',   
    rating: 0
  },
   {
    id:3,
    name:'Sikandar',
    relaseDate:"28/3/2025",
    image:'Sikandar.jpg',
    actors:['Salman Khan',"Rashmika Mandanna","Sharman Joshi","Kajal Aggrawas","Sathyaraj  ","Sunil Shetty","Nawab Shah"],
    release:false,
    link:'https://www.youtube.com/watch?v=l2AMaPCsJIQ',
    comment: '',   
    rating: 0
  },
  {
    id:4,
   name:'War 2',
   relaseDate:"14/8/2025",
   image:'war.jpg',
   actors:['Hrithik Roshan',"N. T. Rama Rao","Kiara Advani","Johan Abraham "," Shabir Ahluwalia" ,"Parth"],
   release:false,
   link:'https://www.youtube.com/watch?v=nsC5PhXS19Y',
   comment: '',   
   rating: 0
 },
 {
  id:5,
  name:'Jolly LLB 3',
  relaseDate:"1/8/2025",
  image:'Jolly LLB 3.jpg',
  actors:['Akshay Kumar',"Amrita Rao","Huma Qureshi","Arshad Warsi ","Saurabh Shukla" ,"Ashish Chaudhary"],
  release:false,
  link:'https://www.youtube.com/watch?v=sRjOrbStr1Y',
  comment: '',   
  rating: 0
},
{
  id:6,
 name:'Babby John',
 relaseDate:"25/12/2024",
 image:'babyJohn.jpeg',
 actors:['Varun Dhawan',"Wamiqa Gabbi","Keerthy Suresh","Salman Khan ","Sanya Manhotra" ,"Jackie Shroff"],
 release:false,
 link:'https://www.youtube.com/watch?v=qyRn3rPRw8w',
 comment: '',   
 rating: 0
},
{
  id:7,
 name:'Yodha',
 relaseDate:"15/3/2024",
 image:'yodha.jpeg',
 actors:['Sidharth Manhotra',"Rashii Khanna","Disha Patani","Kritika Bhardwaj ","Sammy john " ,"Tanuj Virwani"],
 release:false,
 link:'https://www.youtube.com/watch?v=3AuB8RTfBJc',
 comment: '',   
 rating: 0
},
]

movies:BehaviorSubject<any>=new BehaviorSubject(this.movie);
}
