import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jroom',
  templateUrl: './jroom.component.html',
  styleUrls: ['./jroom.component.css']
})
export class JroomComponent implements OnInit {
yourName:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.yourName=sessionStorage.getItem('inputData')
  }

}
