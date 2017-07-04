import { Component } from '@angular/core';


/**
 * Generated class for the NewEventComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'new-event',
  templateUrl: 'new-event.html'
})
export class NewEventComponent {

  text: string;

  constructor() {
    console.log('Hello NewEventComponent Component');
    this.text = 'Hello World';
  }

}
