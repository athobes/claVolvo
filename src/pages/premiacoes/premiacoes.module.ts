import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PremiacoesPage} from './premiacoes';
import {ExpandableComponent} from '../../components/expandable/expandable';
//import {AccordionComponent} from '../../components/accordion/accordion';

@NgModule(
{
    declarations: 
    [
        PremiacoesPage,
        ExpandableComponent,
        //AccordionComponent
    ],
    imports: 
    [
        IonicPageModule.forChild(PremiacoesPage),
    ],
})

export class PremiacoesPageModule {}
