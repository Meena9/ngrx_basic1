import {Action} from'@ngrx/store';

export function simpleReducer(state:string='hello world', action:Action){
console.log("state::",state,"action",action);
switch(action.type){
    case 'English':
        return state= 'hello Meena';
        case 'Hindi':
            return state='namskara'
            default:
            return  state;
}

}