import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from'rxjs';
import {Post} from'../models/post.model';
import *as PostAction from '../actions/post.action';
interface AppState{
  post:Post
}
@Component({
  selector: 'app-reducer-post',
  templateUrl: './reducer-post.component.html',
  styleUrls: ['./reducer-post.component.css']
})
export class ReducerPostComponent implements OnInit {

  post:Observable<Post>;
  text:string;
  constructor( private store: Store<AppState>) { 
    this.post=this.store.select('post');
  }

editText(){
  this.store.dispatch(new PostAction.EditText(this.text))
}
resetPost(){
  this.store.dispatch(new PostAction.Reset())
}
upvotePost(){
  this.store.dispatch(new PostAction.Upvote())
}
downVotePost(){
  this.store.dispatch(new PostAction.Downvote())
}
  ngOnInit() {
    console.log("postt::",this.post);
    
  }

}
