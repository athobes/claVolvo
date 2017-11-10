import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {LoginPage} from '../login/login';

@IonicPage()
@Component(
{
    selector: 'page-logout',
    templateUrl: 'logout.html',
})

export class LogoutPage
{   
    constructor(public navCtrl: NavController, public navParams: NavParams)
    {
        localStorage.clear();
        this.navCtrl.setRoot(LoginPage);
    }
    
    ionViewDidLoad(){}
}
