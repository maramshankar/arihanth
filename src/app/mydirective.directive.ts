import { Directive,ElementRef,HostListener,HostBinding} from '@angular/core';

@Directive({
  selector: '[appMydirective]'
})
export class MydirectiveDirective {
  @HostBinding('style.background') bg:string;

  constructor(private eleRef:ElementRef) { 
    eleRef.nativeElement.style.color="white";
    // eleRef.nativeElement.style.background="blue";
    this.bg='lightgreen';
  }
  @HostListener('mouseover')
      myMouseOver(){
        this.eleRef.nativeElement.style.color='green';
        // this.eleRef.nativeElement.style.background="yellow";
        this.bg="yellow";
      }
 @HostListener('mouseleave')
      myMouseLeave(){
        this.eleRef.nativeElement.style.color='white';
        // this.eleRef.nativeElement.style.background='blue';
        this.bg="blue"
      }

}
