import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  yourName:any;
  constructor(private router:Router) { }

  ngOnInit(): void {
  this.yourName=sessionStorage.getItem('inputData')
  }
  goJoin(){
   this.router.navigateByUrl('/jroom')
  }
  goCreate(){
  this.router.navigateByUrl('/croom')
  }
}
