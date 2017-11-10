import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

import {AppModule} from '../../app/app.module';

@Injectable()
export class AuthServiceProvider
{
    apiUrl: string = AppModule.getApiUrl();
    appToken: string = AppModule.getAppToken();
    
    constructor(public http: Http) {}
        
    login(credentials:any)
    {
        let json = {token:this.appToken, method:'login', email:credentials.email, senha:credentials.password};
        
        return new Promise((resolve, reject) => 
        {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.post(this.apiUrl+'userFunctions.php', JSON.stringify(json), {headers: headers}).subscribe(res => 
            {
                resolve(res.json());
            },
            (err) => 
            {
                reject(err);
            });
        });
    }
    
    changePassdw(credentials:any)
    {
        let json = {token: this.appToken, method: 'passwd', userId:AppModule.getUserId(), old_senha:credentials.old_password, senha:credentials.password};

        return new Promise((resolve, reject) => 
        {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');

            this.http.post(this.apiUrl+'userFunctions.php', JSON.stringify(json), {headers: headers}).subscribe(res => 
            {
                resolve(res.json());
            },
            (err) => 
            {
                reject(err);
            });
        });
    }
}