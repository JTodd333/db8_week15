import { Component, OnInit, Input } from '@angular/core';
import { City } from '../city';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  @Input() TheCity: City = {
    name: '',
    state: '',
    population: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
