import { Component } from '@angular/core';
import { City } from './city';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular2';

	newCity = {
		name: '',
		state: '',
		population: 0
	};

	formShowing: boolean = false;

	cities: City[] = [
		{
		name: 'Detroit',
		state: 'MI',
		population: 500000
		},
		{
			name: 'Grand Rapids',
			state: 'MI',
			population: 10000
		},
		{
			name: 'New York',
			state: 'NY',
			population: 400000
		}
	];

	addCity() {
		//alert('Ok!'); Temporary to test that fucntion gets called.
		 /* let nextCity: City = {
			name: this.newCity.name,
			state: this.newCity.state,
			population: this.newCity.population
		}; */

		//this next line is shorthand for the above.
		//It copies the members of the object
		// one by one
		let nextCity: City = { ... this.newCity};

		this.cities.push(nextCity);
		this.newCity.name = '';
		this.newCity.state = '';
		this.newCity.population = 0;

		this.formShowing = false;
	}

	showForm() {
		//alert('Show form!');
		this.formShowing = true;
	}

	cancelAdd() {
		this.formShowing = false;
		this.newCity.name = '';
		this.newCity.state = '';
		this.newCity.population = 0;
	}
}
