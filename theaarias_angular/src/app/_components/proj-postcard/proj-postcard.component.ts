import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proj-postcard',
  templateUrl: './proj-postcard.component.html',
  styleUrls: ['./proj-postcard.component.scss']
})
export class ProjPostcardComponent implements OnInit {
  
  @Input() title: string = 'Default Title';  
  @Input() description: string = 'Default description';
  @Input() imgpath: string = '';
  @Input() tags: string[] = [''];

  constructor() { }

  ngOnInit(): void {
  }

}
