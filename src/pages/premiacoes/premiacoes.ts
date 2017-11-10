import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, Loading, ToastController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/Rx';

import {AppModule} from '../../app/app.module';

@IonicPage()
@Component(
{
    selector: 'page-premiacoes',
    templateUrl: 'premiacoes.html',
})
export class PremiacoesPage
{
    loading: Loading;
    items: any = [];
    appUrl: string = AppModule.getAppUrl();
    apiUrl: string = AppModule.getApiUrl();
        
    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public http: Http)
    {
        
        this.items = [];
    }
    
    ionViewWillEnter()
    {
        this.getPremiacoes(null).then();
    }

    ionViewDidLoad()
    {
        
    }
    
    presentLoading()
    {
        this.loading = this.loadingCtrl.create(
        {
            content: 'Carregando'
        });
        this.loading.present();
    }
    
    getPremiacoes(refresher:any)
    {
        this.presentLoading();
        
        return new Promise((resolve, reject) =>
        {
            this.http.get(this.apiUrl+'premiacoes.json').map(res => res.json()).subscribe(data => 
            {
                this.items = data;
                resolve(this.items);
                this.loading.dismiss();
                if(refresher)
                {
                    refresher.complete();
                }
            },() => 
            {
                this.loading.dismiss();
                this.presentToast('Verifique sua conexão!');
                if(refresher)
                {
                    refresher.complete();
                }
            });
        });
    }
    
    expandItem(item:any)
    {
        this.items.map((listItem:any) =>
        {
            if(item == listItem)
            {
                listItem.expanded = !listItem.expanded;
            }
            else
            {
                listItem.expanded = false;
            }
 
            return listItem;
 
        });
    }
    
    presentToast(msg)
    {
        let toast = this.toastCtrl.create(
        {
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });

        toast.onDidDismiss(() => {});

        toast.present();
    }
    
    doRefresh(refresher:any)
    {
        this.getPremiacoes(refresher);
    }

}
