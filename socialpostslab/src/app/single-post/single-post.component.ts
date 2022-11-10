import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  @Input() ThePost: Post = {
    title: 'A Post',
    thought: 'A Thought for post'
  };

  @Output() delete: EventEmitter<Post> = new EventEmitter<Post>();

  editMode: boolean = false;
  changedTitle: string = '';
  changedThought: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  edit(){
    //alert('edit!');
    this.changedTitle = this.ThePost.title;
    this.changedThought = this.ThePost.thought;
    this.editMode = true;
  }

  saveChanges() {
    this.ThePost.title = this.changedTitle;
    this.ThePost.thought = this.changedThought;
    this.editMode = false;
  }

  cancelChanges() {
    this.editMode = false;
  }

  deleteMe() {
    //alert('message sent!');
    this.delete.emit(this.ThePost);
  }


}
