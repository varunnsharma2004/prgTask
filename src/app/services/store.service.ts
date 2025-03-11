import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  setuserRole=(roll:any)=>localStorage.setItem('Roll',roll);
  getuserRole=()=>localStorage.getItem('Roll');
  removeRole=()=>localStorage.removeItem('Roll');
}
