import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-faq',
    templateUrl: 'faq.html',
})
export class FaqPage
{
    items: any = [];
    
    constructor(public navCtrl: NavController, public navParams: NavParams)
    {
        this.items = [
            {question:'Serão quantas premiações?', answer:'Ao todo serão 4 premiações trimestrais e uma final.'},
            {question:'Quem poderá participar?', answer:'Podem participar Consultores Comerciais, Consultores de Acessórios e Gerentes de Pós-Vendas de qualquer concessionária Volvo do Brasil.'},
        ];
    }

    ionViewDidLoad()
    {
        
    }
}
