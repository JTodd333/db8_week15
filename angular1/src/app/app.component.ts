import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular1';
	name: string = 'Sally';
	newcity: string = '';

	cities: string[] = [
		'Detroit',
		'New Orleans',
		'San Francisco',
		'Seattle',
		'Moab'
	]

	addCity() {
		//alert('Hello!');

		//TO MODIFY our user interface,
		// we change the values of our member variables
		this.cities.push(this.newcity);
		//this.cities.splice(0,1);
		this.name = 'Joe';
		this.newcity = '';
	}

}
