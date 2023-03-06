import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  displayVal:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
   
  }
  goNext(val:any){
    console.log(val);
    sessionStorage.setItem('inputData',val)
   this.router.navigateByUrl('/avatar')
  }
}
