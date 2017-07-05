import { Component } from '@angular/core';

/**
 * Generated class for the EventDetailsComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'event-details',
  templateUrl: 'event-details.html'
})
export class EventDetailsComponent {

  text: string;

  constructor() {
    console.log('Hello EventDetailsComponent Component');
    this.text = 'Hello World';
  }

}
