import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  constructor(elementRef : ElementRef) {
    console.log(elementRef.nativeElement)
    elementRef.nativeElement.style.backgroundColor = 'green';
   }

}
