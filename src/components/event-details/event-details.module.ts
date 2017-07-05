import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { EventDetailsComponent } from './event-details';

@NgModule({
  declarations: [
    EventDetailsComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    EventDetailsComponent
  ]
})
export class EventDetailsComponentModule {}
