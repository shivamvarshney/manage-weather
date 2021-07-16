import { Component, OnInit } from '@angular/core';

interface data {
  name: string;
  id: string;
  temprature: string;
  sunSetTime: string;
  sunRiseTime: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  citiesData: data[] = [
    {
      id:'London,uk',
      name:'London',
      sunSetTime: '11/10/2016, 11:49:36 AM',
      sunRiseTime: '11/10/2016, 11:49:36 AM',
      temprature: '60C'
    },
    {
      id:'London,uk',
      name:'London',
      sunSetTime: '11/10/2016, 11:49:36 AM',
      sunRiseTime: '11/10/2016, 11:49:36 AM',
      temprature: '50C'
    },
    {
      id:'London,uk',
      name:'London',
      sunSetTime: '11/10/2016, 11:49:36 AM',
      sunRiseTime: '11/10/2016, 11:49:36 AM',
      temprature: '40C'
    },
    {
      id:'London,uk',
      name:'London',
      sunSetTime: '11/10/2016, 11:49:36 AM',
      sunRiseTime: '11/10/2016, 11:49:36 AM',
      temprature: '30C'
    },
    {
      id:'London,uk',
      name:'London',
      sunSetTime: '11/10/2016, 11:49:36 AM',
      sunRiseTime: '11/10/2016, 11:49:36 AM',
      temprature: '20C'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
