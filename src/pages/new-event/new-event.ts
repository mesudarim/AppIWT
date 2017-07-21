import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {} from '@types/googlemaps';
import { Geolocation } from '@ionic-native/geolocation';
import { Platform } from 'ionic-angular';
import { MapPage } from '../map/map'
import { Camera } from '@ionic-native/camera';
//import { BehaviorSubject, Observable } from 'rxjs';


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

  currDate : string = new Date().toISOString();;
  // private $where = new BehaviorSubject<string>("");
  // where: Observable<string> = this.$where.asObservable();
  where: string;
  when : string = this.currDate;
  lat: number;
  lon: number;
  test: number;
  what: string;
  map: MapPage;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private platform: Platform,
              private geolocation: Geolocation,
              private camera: Camera,
              public zone: NgZone
  ) {
    this.platform.ready().then(() => {
      console.log('here', this)
      // this.initialize();

    });
    window['initMap'] = ()=> {
      this.initialize()
    }
    //création d'une balise javascript pour que le this reste dans le scoop et ne soit pas perdu après les requetes à google
    //On a rajouté le initMap à la fin de la script.src
    let script = document.createElement('script')
    script.id = "googleMap";
    script.async = true;
    script.src= 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCv2i8Das8W3j2xw5cj7VN7-dcJJVekbiY&libraries=places&callback=initMap'
    document.body.appendChild(script)


    console.log("before the end of the constructor " + this.lat, this.lon)

    console.log("at the end of the constructor " + this.lat, this.lon)
//

}

  initialize(){
    var a,lat,lon;
    var searchBox: any = document.getElementById('autocomplete');
    var defaultBounds = new google.maps.LatLngBounds(new google.maps.LatLng(this.lat,this.lon));
    var input = document.getElementById('autocomplete');
    var autocomplete = new google.maps.places.Autocomplete(searchBox,defaultBounds);

    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      var place = autocomplete.getPlace();
      a = place.formatted_address;
       this.zone.run(() => {
         this.lat = place.geometry.location.lat();
         this.lon = place.geometry.location.lng();
       })


      // this.lat = lat;
      // this.lon = long;
      //this.$where.next(a);
      //document.getElementById("info").style.backgroundImage = "url(https://maps.googleapis.com/maps/api/staticmap?center="+lat+','+long+"&zoom=15&scale=1&size=700x420&maptype=roadmap&format=png&visual_refresh=true&markers=icon:"+markerimg+"%7Cshadow:true%7C"+lat+','+long+")";
    });
    // google.maps.event.addDomListener(window, 'load', this.initialize);
  }


  hereNow(){
    this.platform.ready().then(() => {
         //get current position
        this.geolocation.getCurrentPosition().then(pos => {
          this.lat = pos.coords.latitude;
          this.lon = pos.coords.longitude;
          var geocoder = new google.maps.Geocoder;
          let myPlace = new google.maps.LatLng(this.lat,this.lon);
          let geopos = `${this.lat},${this.lon}`;
          let latlngStr = geopos.split(',', 2);
          var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
          console.log(latlng)
          geocoder.geocode({'location': latlng}, (results, status) => {
            //this.$where.next(results[0].formatted_address);
            this.zone.run(() => {
              this.where = results[0].formatted_address
            })
          });
        });

        // const watch = this.geolocation.watchPosition().subscribe(pos => {
        //   this.lat = pos.coords.latitude;
        //   this.lon = pos.coords.longitude;
        //     console.log(pos.coords.latitude, pos.coords.longitude);
        //   });
    })
    //Pour avoir la date au format ISO on utilise the toISOString()
    this.currDate = new Date().toISOString();
    this.when = this.currDate;
    console.log("end of here and now OUT " + this.lat, this.lon);
  }

  submit(){
    console.log("in submit " + this.lat, this.lon)
  }

  openMap(){
    this.navCtrl.push('MapPage', {
        lat: this.lat,
        long : this.lon
    });
  }
}
