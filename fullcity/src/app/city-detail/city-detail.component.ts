//We need to manually add Input to the next line:
//
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { City } from '../city';

@Component({
	selector: 'app-city-detail',
	templateUrl: './city-detail.component.html',
	styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {

	@Input() TheCity: City = {
		name: 'Detroit',
		state: 'MI',
		population: 400000
	};

	@Output() remove: EventEmitter<City> = new EventEmitter<City>();


	editMode: boolean = false;
	changeName: string = '';
	changeState: string = '';
	changePop: number = 0;

	// For the delete, we need a thing called an event emitter.
	// It's the "messenger" that will notify the parent (i.e city-list)
	// that we want to be deleted.

	constructor() { }

	ngOnInit(): void {
	}

	edit() {
		//alert('edit!');
		//Copy existing data into edit text boxes
		this.changeName = this.TheCity.name;
		this.changeState = this.TheCity.state;
		this.changePop = this.TheCity.population;
		this.editMode = true;
	}

	delete() {
		//alert('delete!');
		this.remove.emit(this.TheCity);
	}

	saveChanges() {
		// Copy the boxes back into the object's data
		this.TheCity.name = this.changeName;
		this.TheCity.state = this.changeState;
		this.TheCity.population = this.changePop;
		this.editMode = false;
	}

	cancelChanges() {
		this.editMode = false;
	}

}
