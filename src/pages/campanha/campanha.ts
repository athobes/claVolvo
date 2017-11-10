import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

import {RegulamentoPage} from '../regulamento/regulamento';

/**
 * Generated class for the CampanhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component(
{
    selector: 'page-campanha',
    templateUrl: 'campanha.html',
})

export class CampanhaPage
{
    
    constructor(public navCtrl: NavController, public navParams: NavParams)
    {
        
    }

    ionViewDidLoad()
    {
        
    }
    
    changePage()
    {
        this.navCtrl.setRoot(RegulamentoPage);
    }
}
