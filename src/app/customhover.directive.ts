import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomhover]'
})
export class CustomhoverDirective {

  constructor(public el:ElementRef) {
    
   }

   @HostListener('mouseover') hover(){
     this.el.nativeElement.style.backgroundColor="#f44336";
   }
   @HostListener('mouseout') hoverOut(){
     this.el.nativeElement.style.backgroundColor="";
   }
   

}
