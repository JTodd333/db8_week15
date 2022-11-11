import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game';

@Component({
  selector: 'app-vg-list',
  templateUrl: './vg-list.component.html',
  styleUrls: ['./vg-list.component.css']
})
export class VgListComponent implements OnInit {

  newTitle: string = '';
  newYear: number = 0;
  newConsole: boolean = false;

  showAdd: boolean = false;

  constructor(public GameSrv: GameService) { }

  ngOnInit(): void {
  }

  removeGame(whichGame: Game) {
    for(let index = 0; index < this.GameSrv.get().length; index++){
      if (this.GameSrv.get()[index] == whichGame){
        this.GameSrv.get().splice(index, 1)
        return;
      }
    }
  }

  addGame(){
    this.GameSrv.get().push({
      title: this.newTitle,
      year: this.newYear,
      console: this.newConsole
    });

    this.newTitle = '';
    this.newYear = 0;
    this.newConsole = false;

  }

  showAddForm(){
    this.showAdd = true;
  }

  cancelAdd(){
    this.showAdd = false;
    this.newTitle = '';
    this.newYear = 0;
    this.newConsole = false;
  }

}
