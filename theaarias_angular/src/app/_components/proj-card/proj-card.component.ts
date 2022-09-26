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

  public projData: any = [
    {
      title: 'theaarias.com',
      description: "Using Angular framework to create a 2nd iteration of my website. You're in it— Hi!",
      imgPath: '',
      tags: ['html','css','javascript','angular']
    },
    {
      title: 'ischool web app',
      description: "A web app for RIT's school for information using the college's API, JSON, and jQuery plug-ins. Spring 2022.",
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
      description: "A basic weather application utilizing the open source OpenWeather API.",
      imgPath: '',
      tags: ['html','css','api','javascript']
    },
    {
      title: 'bon appetit',
      description: "A website for my friend, the baker, who is starting a baking business.",
      imgPath: this.imgPath + 'bon-appetit.jpg',
      tags: ['html','css','javascript']
    }
  ];

}
