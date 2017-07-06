import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
  }

}


  //@Input() userName: string = "";


//private eventList :EventsListPage
//   constructor() {
//     //console.log(eventList.items)
//     console.log('Hello EventDetailsComponent Component');
//     this.text = 'Hello World';
//   }
//
// }
