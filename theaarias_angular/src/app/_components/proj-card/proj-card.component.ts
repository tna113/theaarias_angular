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

  public projData: any = [
    {
      title: 'theaarias.com',
      description: "A second iteration of my personal website implementing the Angular framework. You're in it! Hi!!",
      imgPath: '',
      tags: ['html','css','javascript','angular']
    },
    {
      title: 'ischool web app',
      description: "Using C# and .NET to create a web application for RIT's school for information using the college's API, JSON, and jQuery plug-ins. Spring 2022",
      imgPath: '',
      tags: ['c#','.net','api','json','jquery']
    },
    {
      title: 'RIT website revamp',
      description: "My iteration of RIT's website using the school's API, Ajax, lots of CSS, jQuery, HTML and JavaScript. Spring 2022.",
      imgPath: '',
      tags: ['api','ajax','json','css','jquery','html','javascript'],
    },
    {
      title: 'Cebu at a glance',
      description: "A website curated for people who are interested in visiting, travelling to and/or learning about my hometown, Cebu, Philippines. Spring 2022.",
      imgPath: '',
      tags: ['html','css','javascript','jquery','php','mysql']
    },
    {
      title: 'endangered species mobile app',
      description: "A web application catered for mobile devices that parses through the animals.json file and displays it onto a menu and detais page. Spring 2022.",
      imgPath: '',
      tags: ['html','css','javascript','json','flutter']
    },
    {
      title: 'myweather',
      description: "A basic weather application utilizing the OpenWeather API (http://openweathermap.org)",
      imgPath: '',
      tags: ['html','css','api','javascript']
    }
  ];

}
