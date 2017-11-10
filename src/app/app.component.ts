import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {AppModule} from './app.module';

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
//import {ListPage} from '../pages/list/list';

@Component(
{
    templateUrl: 'app.html'
})
export class App 
{
    @ViewChild(Nav) nav: Nav;
    
    rootPage: any = '';
    
    pages: Array<{title: string, component: any, icon: string}>;
    
    constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen)
    {
        if(!AppModule.isUserLogged())
        {
            this.rootPage = LoginPage;
        }else
        {
            this.rootPage = HomePage;
        }
        
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages =
        [
            /*{title:'Login', component:LoginPage, icon:''},*/
            {title:'Principal', component:HomePage, icon:'home'},
            {title:'Campanha', component:CampanhaPage, icon:'information-circle'},
            {title:'Premiações', component:PremiacoesPage, icon:'trophy'},
            {title:'Premiação Final', component:PremiacaoFinalPage, icon:'medal'},
            {title:'Ranking', component:RankingPage, icon:'podium'},
            {title:'Regulamento', component:RegulamentoPage, icon:'bookmarks'},
            {title:'FAQ', component:FaqPage, icon:'help-circle'},
            {title:'Meus Dados', component:CadastroPage, icon:'contact'},
            /*{title:'Notas', component:NotasPage, icon:'attach'},*/
            {title:'Sair', component:LogoutPage, icon:'close'}
        ];
    }

    initializeApp()
    {
        if(!localStorage.getItem("remember"))
        {
            localStorage.clear();
        }
        
        this.platform.ready().then(() => 
        {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page)
    {
        if(!localStorage.getItem("loggedIn"))
        {
            this.nav.setRoot(LoginPage);
        }else
        {
            this.nav.setRoot(page.component);
        }
    }
}
