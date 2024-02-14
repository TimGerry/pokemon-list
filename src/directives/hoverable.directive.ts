import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverable]',
  standalone: true
})
export class HoverableDirective {
  originalColor: string;
  @Input('appHoverable') customColor?: string;

  constructor(private el: ElementRef) {
    this.originalColor = el.nativeElement.style.backgroundColor;
   }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.customColor ? this.customColor : 'green';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = this.originalColor;
  }
}
