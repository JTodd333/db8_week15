import { Component, OnInit } from '@angular/core';
import { City } from '../city';

@Component({
	selector: 'app-city-list',
	templateUrl: './city-list.component.html',
	styleUrls: ['./city-list.component.css']
})
export class CityListComponent implements OnInit {

	Cities: City[] = [
		{ name: 'Grand Rapids', state: 'MI', population: 100000},
		{ name: 'Traverse', state: 'MI', population: 50000},
	];
		
	NewName: string = '';
	NewState: string = '';
	NewPopulation: number = 0;

	showAdd: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	showAddForm() {
		this.showAdd = true;
	}

	add() {
		//alert('Add!');
		this.Cities.push({
			name: this.NewName,
			state: this.NewState,
			population: this.NewPopulation
		});
		this.NewName = '';
		this.NewState = '';
		this.NewPopulation = 0;
		this.showAdd = false;

	}

	cancel() {
		//alert('Cancel!');
		// I just pasted these four lines from the add() function.
		this.NewName = '';
		this.NewState = '';
		this.NewPopulation = 0;
		this.showAdd = false;
	}

	removeItem(whichCity: City) {
		//alert(whichCity.name);
		// Loop through the list and look for whichCity
		// If we find it, we'll remove it.
		// We need to use an old fashioned for loop
		// because that gives us the index. When we have
		// the index, we'll call splice(index, 1).
		for(let index=0; index < this.Cities.length; index++){
			if(this.Cities[index] == whichCity) {
				this.Cities.splice(index, 1);
				return; // Get out of the function altogether
			}
		}
	}

}
