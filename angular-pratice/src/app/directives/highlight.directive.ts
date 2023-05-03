import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor() { }
  @HostBinding('style.border') border: string;
  @HostBinding('style.backgroundColor') background: string;
 
  ngOnInit() {
     
  }
  @HostListener('mouseover') 
  onMouseOver() {
    this.border = '5px solid green';
    this.background = 'pink';
    console.log("Mouse over")
  }
 
  @HostListener('mouseleave') 
  onMouseLeave() {
    this.border = '';
    this.background = '';
    console.log("Mouse Leave")
  }
}
