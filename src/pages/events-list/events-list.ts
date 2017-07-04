import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user'

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

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public user: User) {
  }

  ionViewDidLoad() {
    console.log(this.user.email);
  }

}
