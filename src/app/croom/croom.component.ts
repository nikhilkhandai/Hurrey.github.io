import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-croom',
  templateUrl: './croom.component.html',
  styleUrls: ['./croom.component.css']
})
export class CroomComponent implements OnInit {
yourName:any;

  constructor() { }

  ngOnInit(): void {
    this.yourName=sessionStorage.getItem('inputData')
  }
  OnlyNumbersAllowed(event:any){
    const charCode = (event.which)?event.which:event.keyCode;
    if(charCode > 31 &&(charCode<48 || charCode > 57 ))
    {
      return false;
    }
    return true;
  }
}
