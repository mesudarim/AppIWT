import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UserListComponent } from './user-list';

@NgModule({
  declarations: [
    UserListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    UserListComponent
  ]
})
export class UserListComponentModule {}
