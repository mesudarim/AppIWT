import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the TabsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tabs',
  templateUrl: 'tabs.html'
})
export class TabsComponent {

  tab1Root: string = 'GaleryComponent';
  tab2Root: string = 'ChatComponent';
  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello TabsComponent Component');
    this.text = 'Hello World';
  }

}
