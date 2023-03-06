
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvatarComponent } from './avatar/avatar.component';
import { CroomComponent } from './croom/croom.component';
import { JroomComponent } from './jroom/jroom.component';
import { NameComponent } from './name/name.component';
import { RoomComponent } from './room/room.component';

const routes: Routes = [
  {path:'',component:NameComponent},
  {path:'avatar',component:AvatarComponent},
  {path:'room',component:RoomComponent},
  {path:'croom',component:CroomComponent},
  {path:'jroom',component:JroomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
