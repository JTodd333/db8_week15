import { Injectable } from '@angular/core';
import { Pet } from './pet';

// "Injectable" just means we can share it
// with other components in our app. The
// way we share it is nothing short of bizzare,
// and we'll see it when we add it to the
// PetListComponent class.
// Don't read more into it! It's just a class
// that contains a list, and a get function
// that returns the list. THAT'S IT.
// ... almost
// One caveat: Angular makes the one instance for us.
// We don't have to make an instance. Angular makes
// one instance and only one, and will hand that
// instance over to any component that needs it.
// In other words: We dont need to make and instance
// of it. Angular will.

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  TheList: Pet[] = [
    { name: 'muffin', species: 'cat', born: 1979},
    { name: 'Donald Duck', species: 'cat', born: 2007}
  ];

  constructor() { }

  // Let's add a "getter" so anyone who has access
  // to an instance of this class can easily get
  // the list from it.
  get(): Pet[] {
    return this.TheList;
  }

}
