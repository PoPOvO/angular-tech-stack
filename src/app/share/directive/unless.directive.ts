import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * 结构型指令：
 * 和*ngIf功能相反
 */
@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  // 视图是否已被创建
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }
  @Input() set appUnless(condition: boolean) {
    console.log("View:", this.templateRef, this.viewContainer);
    // 如果条件为false，并且指令包裹的视图没有创建则创建新视图
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
      // 如果条件为true并且视图已经创建过则清除
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
