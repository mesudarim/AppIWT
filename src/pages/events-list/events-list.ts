import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from "rxjs";

import { User } from '../../models/user'

import { NewEventComponent } from '../../components/new-event/new-event';
import { UserListComponent } from '../../components/user-list/user-list';
import { EventDetailsComponent } from '../../components/event-details/event-details';

import { EventsProvider } from '../../providers/events'

/**
 * Generated class for the EventsListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-events-list',
  templateUrl: 'events-list.html',
})
export class EventsListPage {

  items:any = []
  user$:Observable<User>;
  //rootPage:string = 'EventsListPage';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private events: EventsProvider
            ) {
    this.events.load().then((data)=>{
      this.items = data;
  });
}
  // ionViewDidLoad() {
  //   console.log(this.user$);
  // }

  newEvent(){
      // push another page onto the navigation stack
      // causing the nav controller to transition to the new page
      // optional data can also be passed to the pushed page.
      this.navCtrl.push(NewEventComponent, {

      });
    }

  getUserList(){
    this.navCtrl.push(UserListComponent, {

    });
  }

  getEventDetails(){
    this.navCtrl.push(EventDetailsComponent, {

    });
  }


  // newEvent(){
  //   console.log("newEvent")
  //   this.rootPage= 'NewEventPage'
  // }

}
