import { Component, OnInit } from '@angular/core';
import * as data  from '../../../assets/lib/projData.json';
//to use json, go to tsconfig.json, add "resolveJsonModule":true in "compilerOptions"

@Component({
  selector: 'app-proj-container',
  templateUrl: './proj-container.component.html',
  styleUrls: ['./proj-container.component.scss']
})
export class ProjContainerComponent implements OnInit {

  //parsing thru json
  public projData = data;

  constructor() { }

  ngOnInit(): void {
    console.log('imported projData.json');
    console.log(data);
  }

}
