import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, Loading, ToastController} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import 'rxjs/add/operator/map';

import {AppModule} from '../../app/app.module';
import {LoginPage} from '../login/login';

@IonicPage()

@Component(
{
    selector: 'page-cadastro',
    templateUrl: 'cadastro.html',
})

export class CadastroPage
{
    userName:string;
    userEmail:string;
    
    loading: Loading;
    credentials = {old_password:'', password:''};
    data: any;
    
    constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private loadingCtrl: LoadingController, private toastCtrl: ToastController)
    {
        this.userName = AppModule.getUserName();
        this.userEmail = AppModule.getUserEmail();
    }

    ionViewDidLoad()
    {
        
    }
    
    passdwForm()
    {
        if(AppModule.isUserLogged())
        {
            this.showLoading();

            this.auth.changePassdw(this.credentials).then((result) => 
            {
                this.loading.dismiss();
                this.data = result;

                if(!this.data.error)
                {
                    localStorage.clear();
                    this.presentToast(this.data.message);
                    //this.navCtrl.setRoot(LoginPage);
                }else
                {
                    this.presentToast(this.data.errMsg);
                }
            },(err) => 
            {
                this.loading.dismiss();
                this.presentToast(err);
            });
        }
        else
        {
            localStorage.clear();
            this.navCtrl.setRoot(LoginPage);
        }
    }
    
    showLoading()
    {
        this.loading = this.loadingCtrl.create(
        {
            content: 'Carregando',
            dismissOnPageChange: true
        });
        this.loading.present();
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
}
