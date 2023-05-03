import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element : ElementRef, private renderer : Renderer2) {
    console.log(this.element)
   }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}
/**
 * 
 * HostListener decorator listen to the DOM event on the host element and it reacts to that event
 * by executing an event handler method.
 * 
 * Hostbinding decorator binds a host element property to a variable in a directive or a component
 */
@HostListener('mouseenter') onMouseOver() {
  this.renderer.setStyle(this.element.nativeElement,'margin','5px 10px');  
  this.renderer.setStyle(this.element.nativeElement,'padding','30px 30px');  
  this.renderer.setStyle(this.element.nativeElement,'transition','0.5s');  
  this.renderer.setStyle(this.element.nativeElement,'background','green');  
}

@HostListener('mouseleave') onMouseLeave() {
  this.renderer.setStyle(this.element.nativeElement,'margin','0px 0px');
  this.renderer.setStyle(this.element.nativeElement,'padding','10px 10px');
}
}
