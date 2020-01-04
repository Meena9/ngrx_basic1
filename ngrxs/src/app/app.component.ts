import { Component } from '@angular/core';
import {Store, select} from '@ngrx/store';
import { Observable } from 'rxjs';

interface AppState{
  message:string
};
import {Post} from'./models/post.model';
import *as PostAction from './actions/post.action';
interface AppState{
  post:Post
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  message$:Observable<string>
  title = 'ngrxs';
  constructor(private store:Store<AppState>){
    this.message$=this.store.select('message');

  }
  getEnglish(){
    this.store.dispatch({type:'English'})
  }
  getHindi(){
    this.store.dispatch({type:'Hindi'})
  }
//   post:Observable<Post>;
//   text:string;
//   constructor( private store: Store<AppState>) { 
//     this.post=this.store.select('post');
//   }

// editText(){
//   this.store.dispatch(new PostAction.EditText(this.text))
// }
// resetPost(){
//   this.store.dispatch(new PostAction.Reset())
// }
// upvotePost(){
//   this.store.dispatch(new PostAction.Upvote())
// }
// downVotePost(){
//   this.store.dispatch(new PostAction.Downvote())
// }
//   ngOnInit() {
//     console.log("postt::",this.post);
    
//   }

}
