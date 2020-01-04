import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StoreModule} from '@ngrx/store'
import {simpleReducer} from './simple.Reducer';
import {postReduce} from './reducers/post.Reducer';
import { ReducerPostComponent } from './reducer-post/reducer-post.component';
@NgModule({
  declarations: [
    AppComponent,
    ReducerPostComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({message:simpleReducer,post:postReduce}),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
