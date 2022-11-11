import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pet } from '../pet';

@Component({
	selector: 'app-pet-detail',
	templateUrl: './pet-detail.component.html',
	styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {

	// Manually add Input, Output, and Event Emittoer
	// 		to the first import
	// This component will manage a single instance of Pet.
	// So we need an instance of Pet.
	//		For initial testing, we might want to fill
	//		ThePet with some actual temprary data.
	// Three operations:
	// View the per (R)
	//		Also include a button to switch to edit mode
	//		and a button to delete (but don't code them yet)
	// Edit the pet (U)
	//		To make it editable, add a bool for editMode
	//		Make two sets of controls, one for view mode
	//		and one for edit mode, and make them toggle-able.
	//		Get the edit button working to switch to edit mode
	//		-Also need variables to bind the edit boxes to.
	//		"wire up" or "bind" these variables to the controls.
	//		Remember your two sets of brackets, square and round.
	//			[(ngModel)]
	//		-Now pre-populate the input boxes with the current 
	//		values from ThePet object.
	// Delete the pet (D)
	//		Create an devent emitter
	//		When the delete button is clicked, call the
	//		emitters emit() function, passing up
	//		the object,
	// There won't be a "create" part of CRUD.
	// Let's add some styling to the .css file

	// The one we get from the list will replace this one. 
	// This is just to make the compiler happy.
	@Input() ThePet: Pet = {
		name: 'Poppy',
		species: 'Dog',
		born: 2019
	}

	// editMode is used to control when parts of the UI
	// are showing or are hidden. Variable like this
	// are called part of the "ViewModel". This is a model
	// or data for manipulating the "view". This data does
	// not get stored in the database.

	editMode: boolean = false;
	editName: string = '';
	editSpecies: string = '';
	editBorn: number = 0;

	// Here's the event emitter. The event will be
	// called "delete" because that makes some sense.
	@Output() delete: EventEmitter<Pet> = new EventEmitter<Pet>();

	constructor() { }

	ngOnInit(): void {
	}

	goToEditMode() {
		this.editMode = true;
		//Prepopulate the edit boxes through these variables.
		this.editName = this.ThePet.name;
		this.editSpecies = this.ThePet.species;
		this.editBorn = this.ThePet.born;
	}

	cancelEditMode() {
		this.editMode = false;
	}

	save() {
		// Two things: Save the edit boxes into the object
		// Go back to non-edit-mode.
		this.ThePet.name = this.editName;
		this.ThePet.species = this.editSpecies;
		this.ThePet.born = this.editBorn;
		this.editMode = false;
	}

	deleteMe() {
		// We want to test that the fucntion is getting called,
		// so let's throw in an alert to test it.
		// After testing, comment out or delete the alert.
		//alert('Sending delete!');
		// Send the message! Send out the object with it as the payload.
		this.delete.emit(this.ThePet);
	}

}
