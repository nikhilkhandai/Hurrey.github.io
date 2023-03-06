import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvatarComponent } from './avatar/avatar.component';
import { NameComponent } from './name/name.component';
import { RoomComponent } from './room/room.component';
import { CroomComponent } from './croom/croom.component';
import { JroomComponent } from './jroom/jroom.component';


@NgModule({
  declarations: [
    AppComponent,
    AvatarComponent,
    NameComponent,
    RoomComponent,
    CroomComponent,
    JroomComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
