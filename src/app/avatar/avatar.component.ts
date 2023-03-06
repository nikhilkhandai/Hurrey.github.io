import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  imageIndex:any;
inputName:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.inputName=sessionStorage.getItem('inputData')
  }

  goNext(){
   
   this.router.navigateByUrl('/room')   

  }
  
}
