import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-card',
  templateUrl: './proj-card.component.html',
  styleUrls: ['./proj-card.component.scss']
})
export class ProjCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  private imgPath = '../../../assets/images/';
  //later, make all img titles same as text titles + images all jpg to easily implement img path

  
}
