import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, Loading, ToastController} from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import 'rxjs/add/operator/map';

import {HomePage} from '../home/home';

@IonicPage()
@Component(
{
    selector: 'page-login',
    templateUrl: 'login.html',
})

export class LoginPage
{
    loading: Loading;
    credentials = {email:'', password:'', remember:''};
    data: any;
    public toggle: boolean;
  
    constructor(public navCtrl: NavController, public navParams: NavParams, private auth: AuthServiceProvider, private loadingCtrl: LoadingController, private toastCtrl: ToastController)
    {
        this.toggle = true;
    }
    
    public loginForm()
    {
        this.showLoading();
        
        this.auth.login(this.credentials).then((result) => 
        {
            this.loading.dismiss();
            this.data = result;
            
            if(!this.data.error)
            {
                localStorage.setItem('loggedIn', 'true');
                localStorage.setItem('userId', this.data.id);
                localStorage.setItem('userName', this.data.name);
                localStorage.setItem('userEmail', this.data.email);
                localStorage.setItem('userPosition', this.data.position);
                if(this.toggle)
                {
                    localStorage.setItem('remember', 'true');
                }
                this.navCtrl.setRoot(HomePage);
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
  
    showLoading()
    {
        this.loading = this.loadingCtrl.create(
        {
            content: 'Carregando',
            dismissOnPageChange: true
        });
        this.loading.present();
    }

    ionViewDidLoad()
    {
        
    }
    
    rememberToggle()
    {
        this.toggle = !this.toggle;
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
