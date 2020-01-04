import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReducerPostComponent } from './reducer-post/reducer-post.component';


const routes: Routes = [
  {path:'post', component:ReducerPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
