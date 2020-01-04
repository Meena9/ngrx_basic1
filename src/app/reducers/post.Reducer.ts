import {Post} from '../models/post.model';
import *as PostAction  from'../actions/post.action'
export type Action=PostAction.All

const defaultstate:Post={
    text:'hello, default state ',
    likes:0
}
const newstate=(state,newstate)=>{
    return Object.assign({},state,newstate)
}
export function postReduce(state:Post =defaultstate,action:Action){
    console.log("state",state,"action",action);
    switch(action.type){
        case PostAction.EDIT_TEXT:
            return newstate(state,{text:'action edit payout'});
            case PostAction.UPVOTE:
                return newstate(state,{likes:state.likes+1});
                case PostAction.DOWNVOTE:
                    return newstate(state,{likes:state.likes-1})
                    case PostAction.RESET:
                        return state
    }
}