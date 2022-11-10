import { Component } from '@angular/core';
import { Pet } from './pet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pets';


  // This was just so we could test the app-pet-detail
  // component
  //deletePet(whichPet: Pet) {
  //    alert(whichPet.name);
  //}

}
