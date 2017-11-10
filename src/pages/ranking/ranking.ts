import {Component, Injectable} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, Loading, ToastController} from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/from';
import 'rxjs/Rx';

import {AppModule} from '../../app/app.module';

@IonicPage()
@Injectable()

@Component(
{
    selector: 'page-ranking',
    templateUrl: 'ranking.html',
})

export class RankingPage
{
    loading: Loading;
    ranking: any = [];
    rankings: any;
    appUrl: string = AppModule.getAppUrl();
    apiUrl: string = AppModule.getApiUrl();
    activeMethod: number;
    userType:string;
    userTypeLabel: string;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, private toastCtrl: ToastController, public http: Http)
    {
        this.activeMethod = 0;
        this.rankings = [];
        
        this.userType = localStorage.getItem("userPosition").toLowerCase();
        
        if(localStorage.getItem("userPosition").toLowerCase()=='gerente')
        {
            this.userTypeLabel = 'Gerentes';
        }
        else if(localStorage.getItem("userPosition").toLowerCase()=='consultor')
        {
            this.userTypeLabel = 'Consultores';
        }
    }

    ionViewDidLoad()
    {
        
    }
    
    ionViewWillEnter()
    {
        this.getRankings().then(() => this.loadRankingData(0,null));
    }
    
    presentLoading()
    {
        this.loading = this.loadingCtrl.create(
        {
            content: 'Carregando'
        });
        this.loading.present();
    }
    
    getRankings()
    {
        return new Promise((resolve, reject) =>
        {
            this.http.get(this.apiUrl+'rankings.json').map(res => res.json()).subscribe(data => 
            {
                this.rankings = data;
                resolve(this.rankings);
            },
            () => 
            {
                this.presentToast('Verifique sua conexão!');
            });
        });
    }
    
    loadRankingData(methodKey:number, refresher:any)
    {
        this.presentLoading();
        this.ranking = [];
        this.activeMethod = methodKey;
        
        return new Promise((resolve, reject) =>
        {
            this.http.get(this.apiUrl+'getInfos.php?userType='+this.userType+'&method='+this.rankings[methodKey].method).map(res => res.json()).subscribe(data => 
            {
                this.ranking = data;
                resolve(this.ranking);
                this.loading.dismiss();
                if(refresher)
                {
                    refresher.complete();
                }
            },
            () => 
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
    
    openFullRanking()
    {
        window.open(this.appUrl+'/images/rankings/'+this.userType+'/'+this.rankings[this.activeMethod].id+'.jpg', '_system', 'location=yes'); return false;
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
        this.loadRankingData(this.activeMethod, refresher);
    }
}
