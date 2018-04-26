import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { EventApp } from './event-app.component'
import { EventThumbnailComponent } from './event/event-thumbnail.component'
import { EventListComponent } from './event/events-list.component'
import { NavBarComponent } from './nav/navbar.component'


@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventApp,
    EventThumbnailComponent,
    EventListComponent,
    NavBarComponent  
  ],
  bootstrap: [EventApp]
})
export class AppModule { }
