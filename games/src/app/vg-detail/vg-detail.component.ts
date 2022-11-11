import { DomElementSchemaRegistry } from '@angular/compiler';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Game } from '../game';

@Component({
  selector: 'app-vg-detail',
  templateUrl: './vg-detail.component.html',
  styleUrls: ['./vg-detail.component.css']
})
export class VgDetailComponent implements OnInit {

  @Input() TheGame: Game = {
    title: 'Animal Crossing',
    year: 2020,
    console: true
  };

  @Output() remove: EventEmitter<Game> = new EventEmitter<Game>();

  editMode: boolean = false;
  changeTitle: string = '';
  changeYear: number = 0;
  changeConsole = false;

  constructor() { }

  ngOnInit(): void {
  }

  edit() {
    //Copy exisiting data into the edit text boxes
    this.changeTitle = this.TheGame.title;
    this.changeYear = this.TheGame.year;
    this.changeConsole = this.TheGame.console;
    this.editMode = true;
  }

  saveChanges() {
    // Copy the text boxes back into the object's data
    this.TheGame.title = this.changeTitle;
    this.TheGame.year = this.changeYear;
    this.TheGame.console = this.changeConsole;
    this.editMode = false;
  }

  cancelEdit() {
    this.editMode = false;
  }

  deleteMe() {
    //alert('delete message sent!')
      this.remove.emit(this.TheGame)
  }

}
