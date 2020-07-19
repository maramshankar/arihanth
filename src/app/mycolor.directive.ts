import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMycolor]'
})
export class MycolorDirective {
  @HostBinding('style.color') myCol:string
  @HostBinding('style.background') mybg:string

  constructor(private eleRef:ElementRef) {
    this.myCol="black";
    this.mybg="lightgreen";
   }
   @HostListener('mouseover') mymouseover(){
     this.myCol="white";
     this.mybg="green"
   }
   @HostListener('mouseleave') mymouseleave(){
    this.myCol="black";
    this.mybg="lightgreen"
  }

}
