import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {} from '@types/googlemaps';

/**
 * Generated class for the NewEventPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-event',
  templateUrl: 'new-event.html',
})
export class NewEventPage {

  currDate: Date;
  when:Date;
  where: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.when, this.where)

    var a,lat,long;

    function initialize() {
        var searchBox: any = document.getElementById('autocomplete');
        var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(43.7182713,-79.3777061));
        var input = document.getElementById('autocomplete');
        var autocomplete = new google.maps.places.Autocomplete(searchBox,defaultBounds);

        google.maps.event.addListener(autocomplete, 'place_changed', function () {
          var place = autocomplete.getPlace();
          a = place.formatted_address;
          lat = place.geometry.location.lat();
          long = place.geometry.location.lng();
          console.log(lat,long)
          //document.getElementById("info").style.backgroundImage = "url(https://maps.googleapis.com/maps/api/staticmap?center="+lat+','+long+"&zoom=15&scale=1&size=700x420&maptype=roadmap&format=png&visual_refresh=true&markers=icon:"+markerimg+"%7Cshadow:true%7C"+lat+','+long+")";
        });

    };
    google.maps.event.addDomListener(window, 'load', initialize);
}

ionViewDidLoad() {
  console.log('ionViewDidLoad NewEventPage');
}

hereNow(){
  this.currDate = new Date();
  console.log(this.currDate)
}

openMap(){
  this.navCtrl.push('MapPage', {
      //item: item
  });
}

// export class NewEventComponent {
//
//   text: string;
//
//   constructor() {
//     console.log('Hello NewEventComponent Component');
//     this.text = 'Hello World';
//   }
//
}
