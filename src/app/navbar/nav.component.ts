import { Component } from '@angular/core';

@Component({
  selector: 'my-nav',
  templateUrl: './nav.component.html',
  styleUrls: [ './nav.component.css' ]
})
export class navComponent  {
  navitems=[
    {linkId:1,linkname: 'Home'},
    {linkId:1,linkname: 'Reminder'},
    {linkId:1,linkname: 'Contacts'},
  ];

  constructor (){
    ngOnInit(): void{

    }
  }
 }
 