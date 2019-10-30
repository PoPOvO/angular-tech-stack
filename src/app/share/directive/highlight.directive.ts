import {Directive, ElementRef, HostListener, Input} from '@angular/core';

/**
 * 属性性指令：
 * 该指令标记的元素，鼠标悬停在上面时，会高亮。
 */
@Directive({
  selector: 'p[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight')
  highlightColor: string;

  constructor(private el: ElementRef) {
    console.log("EL:", el);
    this.highlightColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
