import {Component, ViewChild, Renderer} from '@angular/core';
 
@Component(
{
    selector: 'accordion',
    templateUrl: 'accordion.html'
})
export class AccordionComponent
{
    accordionExpanded = false;
    @ViewChild('cc') cardContent: any;
    
    constructor(public renderer: Renderer)
    {
        
    }
    
    ngOnInit()
    {
        this.renderer.setElementStyle(this.cardContent.nativeElement, 'webkitTransition', 'max-height 500ms, padding 500ms');
    }
    
    toggleAccordion()
    {
        if(this.accordionExpanded)
        {
            this.renderer.setElementStyle(this.cardContent.nativeElement, 'max-height','0px');
        }else
        {
            this.renderer.setElementStyle(this.cardContent.nativeElement, 'max-height','500px');
        }
        
        this.accordionExpanded = !this.accordionExpanded;
    }
}
