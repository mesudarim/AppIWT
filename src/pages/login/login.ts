import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';

//import { AuthProvider } from '../../providers/auth';

import { MyApp } from '../../app/app.component'

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:string = '';
  password:string;


  constructor(public navCtrl: NavController,
              //public navParams: NavParams
              //private readonly auth:AuthProvider,
              private readonly modalCtrl: ModalController,
              private readonly loadingCtrl: LoadingController,
              // private readonly toastCtrl: ToastController
              private myApp: MyApp
            ) {
  }

//   openSignup(){
//   let modal = this.modalCtrl.create('SignupPage');
//   modal.present();
// }

login() {
    let loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      content: 'Logging in ...'
    });

    loading.present();

    //let email = this.email

    setTimeout( _=>{
       loading.dismiss();
     }, 1000);


    this.myApp.rootPage = 'EventsListPage';

    // this.auth
    //   .login({email:this.email, password:this.password })
    //   .finally(() => loading.dismiss())
    //   .subscribe(
    //     () => {})
    //     err => this.handleError(err));
  }

  createNew(){
    this.navCtrl.push('SignupPage', {
    });
  }

  // ionViewDidLoad() {
  //
  //   console.log('ionViewDidLoad LoginPage');
  // }

}
