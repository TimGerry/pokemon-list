import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[appTwowayexample]',
  standalone: true
})
export class TwowayexampleDirective implements OnInit {
  @Input() appTwowayexample!: string;
  @Output() appTwowayexampleChange = new EventEmitter<string>();

  el: HTMLElement;

  constructor(private elRef: ElementRef) { 
    this.el = elRef.nativeElement;
  }

  ngOnInit(): void {
    this.el.contentEditable = 'true';
    this.el.innerText = this.appTwowayexample;
  }

  @HostListener('input') 
  public onInput() {
    this.appTwowayexample = this.el.innerText;
    this.appTwowayexampleChange.emit(this.appTwowayexample);
  }
}
