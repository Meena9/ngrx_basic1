import {Action} from '@ngrx/store';
export const UPVOTE='[Post] Upvote';
export const RESET='[Post] Reset';
export const DOWNVOTE='[Post] Downvote';
export const EDIT_TEXT='[Post] Edit';

export class EditText implements Action{
   readonly type =EDIT_TEXT; 
   constructor(public payload:string){}
}
export class Downvote implements Action{
    readonly type =DOWNVOTE; 
  
 }
 export class Reset implements Action{
    readonly type =RESET; 

 }
 export class Upvote implements Action{
    readonly type =UPVOTE; 
   
 }
 export type All=Upvote|Reset|Downvote|EditText