import { Component, OnInit } from '@angular/core';
import { BevService } from '../bev.service';
import { Beverage } from '../beverage';

@Component({
	selector: 'app-bev-list',
	templateUrl: './bev-list.component.html',
	styleUrls: ['./bev-list.component.css']
})
export class BevListComponent implements OnInit {

	// Variable for the inputs for a new beverage
	newName: string = '';
	newAlcohol: boolean = false;
	newSize: number = 0;

	// Anytime we need the list, we say
	// this.BevSrv.get()
	constructor(public BevSrv: BevService) { }

	ngOnInit(): void {
	}

	doDelete(whichBev: Beverage) {
		for (let i = 0; i < this.BevSrv.get().length; i++) {
			if(this.BevSrv.get()[i] == whichBev){
				this.BevSrv.get().splice(i, 1);
				return;
			}
		}
	}

	addOne(){
		this.BevSrv.get().push(
			{
				name: this.newName,
				alcohol: this.newAlcohol,
				size: this.newSize
			}
		);
		this.newName = '';
		this.newSize = 0;
		this.newAlcohol = false;
	}

}

