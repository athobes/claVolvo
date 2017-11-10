import {Component, Input, ViewChild, ElementRef, Renderer} from '@angular/core';
 
@Component(
{
    selector: 'expandable',
    templateUrl: 'expandable.html'
})

export class ExpandableComponent
{
    @ViewChild('expandWrapper', {read: ElementRef}) expandWrapper:any;
    @Input('expanded') expanded:boolean;
    @Input('expandHeight') expandHeight:any;
 
    constructor(public renderer: Renderer)
    {
 
    }
 
    ngAfterViewInit()
    {
        //this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'height', this.expandHeight + 'px');
        this.renderer.setElementStyle(this.expandWrapper.nativeElement, 'max-height', '500px');  
    }
 
}