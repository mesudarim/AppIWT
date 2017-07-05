import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { Http, HttpModule, RequestOptions } from "@angular/http";

import { MyApp } from './app.component';
import { AuthProvider } from '../providers/auth';
import { NewEventComponent } from '../components/new-event/new-event';
import { EventsProvider } from '../providers/events';
import { EventDetailsComponent } from '../components/event-details/event-details';
import { UserListComponent } from '../components/user-list/user-list';

@NgModule({
  declarations: [
    MyApp,
    NewEventComponent,
    EventDetailsComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewEventComponent,
    EventDetailsComponent,
    UserListComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    EventsProvider
  ]
})
export class AppModule {}
