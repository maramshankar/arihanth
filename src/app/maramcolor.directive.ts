import { Directive,ElementRef,HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaramcolor]'
})
export class MaramcolorDirective {

  @HostBinding('style.color') myCol:string
  @HostBinding('style.background') mybg:string

  constructor(private eleRef:ElementRef) {
    this.myCol="white";
    this.mybg="blue";
   }
   @HostListener('mouseover') mymouseover(){
     this.myCol="white";
     this.mybg="yellow"
   }
   @HostListener('mouseleave') mymouseleave(){
    this.myCol="white";
    this.mybg="blue";
  }

}



