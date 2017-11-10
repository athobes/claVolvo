import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';

import {ElasticHeaderDirective} from '../directives/elastic-header/elastic-header';
import {AccordionComponent} from '../components/accordion/accordion';
import {ExpandableComponent} from '../components/expandable/expandable';

import {App} from './app.component';
import {LoginPage} from '../pages/login/login';
import {HomePage} from '../pages/home/home';
import {CampanhaPage} from '../pages/campanha/campanha';
import {PremiacoesPage} from '../pages/premiacoes/premiacoes';
import {PremiacaoFinalPage} from '../pages/premiacao-final/premiacao-final';
import {RankingPage} from '../pages/ranking/ranking';
import {RegulamentoPage} from '../pages/regulamento/regulamento';
import {FaqPage} from '../pages/faq/faq';
import {CadastroPage} from '../pages/cadastro/cadastro';
//import {NotasPage} from '../pages/notas/notas';
import {LogoutPage} from '../pages/logout/logout';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthServiceProvider} from '../providers/auth-service/auth-service';

@NgModule(
{
    declarations:
    [
        App,
        LoginPage,
        HomePage,
        CampanhaPage,
        PremiacoesPage,
        PremiacaoFinalPage,
        RankingPage,
        RegulamentoPage,
        FaqPage,
        CadastroPage,
        //NotasPage,
        LogoutPage,
        ElasticHeaderDirective,
        AccordionComponent,
        ExpandableComponent
    ],
    imports:
    [
        BrowserModule,
        HttpModule,
        IonicModule.forRoot(App),
    ],
    bootstrap: [IonicApp],
    entryComponents:
    [
        App,
        LoginPage,
        HomePage,
        CampanhaPage,
        PremiacoesPage,
        PremiacaoFinalPage,
        RankingPage,
        RegulamentoPage,
        FaqPage,
        CadastroPage,
        //NotasPage,
        LogoutPage
    ],
    providers:
    [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        AuthServiceProvider
    ],
    exports: 
    [
        ExpandableComponent, 
        AccordionComponent
    ]
})

export class AppModule
{
    private static appUrl: string = 'http://www.mcibrasil.com.br/volvo/app/V2/';
    //private static appUrl: string = 'http://192.168.1.100/15.MCI/ClaVolvo/';
    private static apiDir: string = 'api/';
    private static appToken: string = '9j55Yk36uGLxofWch9dWyhxCm0kQlN94S6VOFxYbSyxKSVF8dIOKmqJU9PHW';

    static getAppUrl()
    {
        return this.appUrl;
    }
    
    static getApiUrl()
    {
        return this.appUrl+this.apiDir;
    }
    
    static getAppToken()
    {
        return this.appToken;
    }
    
    static isUserLogged()
    {
        return localStorage.getItem('loggedIn');
    }
    
    static getUserId()
    {
        return localStorage.getItem('userId');
    }
    
    static getUserName()
    {
        return localStorage.getItem('userName');
    }
    
    static getUserEmail()
    {
        return localStorage.getItem('userEmail');
    }
}
