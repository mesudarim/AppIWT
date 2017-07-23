import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import {Observable} from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
/*
  Generated class for the EventsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/


export interface IEvent {
  id?: number;
  eventOwner?: string;
  eventName?: string;
  when?: string;
  duration? : string;
  where?: string;
  imageUrl?: string;
  //users? = [];
  //galery? = [];
}



@Injectable()
export class EventsProvider {

  public events$: Observable<IEvent[]>;
  private _events$: BehaviorSubject<IEvent[]>;
  private _dataStore: {  // This is where we will store our data in memory
    events: IEvent[]
  };

  data: any;
  private _eventUrl = 'http://localhost:3000/events';

  constructor(private _http: Http) {
    this._dataStore = { events: [] };
    this._events$ = <BehaviorSubject<IEvent[]>>new BehaviorSubject([]);
    this.events$ = this._events$.asObservable();
  }
  //   this.data = null;
  // load() {
  //   return this._http.get(this._eventUrl);
  // }
  //
  loadAll():void {
        this._http.get(this._eventUrl)
          .map(res => res.json())
          .subscribe(
                data => {
                  // add new datas to store.todos
                  this._dataStore.events = data;
                  // assign new state to observable Todos Subject
                  this._events$.next(Object.assign({}, this._dataStore).events);
                },
                error => this.handleError(`${(error.statusText)? error.statusText + ' Could not load events.' : 'Could not load events.'}`) //console.log('Could not load todos.')
             );
      };

      //   this._http.get(this._eventUrl)
      //     .map(res => res.json())
      //     .subscribe(data => {
      //       this.data = data;
      //       resolve(this.data);
      //     });
      // });


    createNewEvent(newEvent : IEvent):void {
          console.log(newEvent)
          let body:string = JSON.stringify({description: newEvent});
          this._http.post(this._eventUrl, body)
          .map(response => response.json()) // return response as json
           .subscribe(
              data => {
                console.log(data)
                // push new todo into _dataStore.todos
                this._dataStore.events.push(data);
                // assign new state to observable Todos Subject
                this._events$.next(Object.assign({}, this._dataStore).events);
              },
              error => this.handleError(`${(error.statusText)? error.statusText + ' Could not create todo.' : 'Could not create todo.'}`) //console.log('Could not create todo.')
           );
        };

        //   this._http.get(this._eventUrl)
        //     .map(res => res.json())
        //     .subscribe(data => {
        //       this.data = data;
        //       resolve(this.data);
        //     });
        // });

    handleError(error:string):void {
      console.error(error || 'Server error');
      alert(error || 'Server error');
    }


}
