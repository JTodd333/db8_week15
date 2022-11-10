import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
	selector: 'app-social-posts',
	templateUrl: './social-posts.component.html',
	styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

	Posts: Post[] = [
	{
		title: 'Hello',
		thought: 'This is my first post'
	},
	{
		title: 'Cont.',
		thought: 'And my second post'
	}
	];
	/*
	newPost: Post = {
		title = '',
		thought = ''
	};
	*/
	newPost = {
		title: '',
		thought: ''
	  };

	formShowing: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	showForm() {
		this.formShowing = true;
	}
	cancel() {
		this.formShowing = false;
	}

	addPost() {
		let nextPost: Post = { ... this.newPost};
	
		this.Posts.push(nextPost);
		this.newPost.title = '';
		this.newPost.thought = '';
	}

	deletePost(whichPost: Post) {
		for(let index = 0; index <= this.Posts.length; index++){
			if (this.Posts[index] == whichPost){
				this.Posts.splice(index, 1);
				return;
			}
		}
	}

}
