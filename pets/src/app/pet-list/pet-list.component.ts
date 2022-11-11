import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent implements OnInit {

  // We built the pet-detail first. Now let's build 
  // pet-list
  //
  // We will have a list of pets.
  // This component will display the list,
  // with each pet using the pet-detail component.
  // We will have a "form" for adding a pet.
  // We will handle the delete event that comes
  // from the pet-detail component.

  // We'll create a list and temporarily put
  // test data in it. But then after we see it;s
  // working for displaying it, we will remove
  // the test data.

  // Then we'll add the view for displaying them.
  // The view will be a for loop tht goes through
  // the list and sends each indiviusla one into
  // a pet-detail component. (That's why the pet-detail)
  // component needed @Input. )
  // For the list, I recommend <ng-container></ng-container>
  // inside container <app-pet-detail [ThePet]>  "ThePet"
  // matches our test/model object.

  // Commented out list. This was used prior to services.
  //TheList: Pet[] = [
    //After testing, let's remove the test data
    // I'll leave here as a comment.
    //{ name: 'muffin', species: 'cat', born: 1979},
    //{ name: 'Donald Duck', species: 'cat', born: 2007}
  //];
  // For this version we deleted the list, since it's
  // now stored in a service.

  // Let's have Angular give us the one instance
  // of the pet list from the PetsService.
  // We put it in the constructor.
  // We now have an instance of PetsService
  // stored in a public member variable
  // called PetSrv. i.e. PetServ is now a member
  // of the class and we can access it through
  // this.PetServ. And we can get the list like so:
  // thuis.PetSrv.get()
  // This concept of adding it to our constructor
  // is called "injection".

  constructor(public PetSrv: PetsService) { }

  ngOnInit(): void {
  }

  //For the add:
  //    We create the "form":
  //    We make variables for each input box 
  //    Then we bind the variables to the input boxes
  //    We include an "add" button whose event handler
  //    creates a new Pet and adds it to the list.

  newName: string = '';
  newSpecies: string = '';
  newBorn: number = 0;

  add() {
      // Create a new Pet Object and add it to the list
      // Then clear out the input boxes

      //this.TheList.push(   (Commented out, this is prior to services)
      this.PetSrv.get().push(
        {
          name: this.newName,
          species: this.newSpecies,
          born: this.newBorn
        }
      );

      this.newName = '';
      this.newSpecies = '';
      this.newBorn = 0;
  }

  deletePet(whichPet: Pet) {
    for(let index: number = 0; index <= this.PetSrv.get().length; index++) {
    //for(let index: number = 0; index <= this.TheList.length; index++) {
    //(Commented out, this is prior to services)
    if(this.PetSrv.get()[index] == whichPet) {
      //if(this.TheList[index] == whichPet) { (prior to services)
        //Remove from the list
        //this.TheList.splice(index, 1);
        this.PetSrv.get().splice(index, 1);
        return;
      }
      
    }
  }

}
