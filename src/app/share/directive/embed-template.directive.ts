import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';
import {WelcomeComponent} from '../../pages/welcome/welcome.component';

/**
 * 为当前结构指令的宿主元素嵌入一个引用的视图，类比ngTemplateOutlet
 */
@Directive({
  selector: '[appEmbedTemplate]'
})
export class EmbedTemplateDirective {
  _template: TemplateRef<any>;
  // 是否已被创建
  hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  /**
   * 为宿主DOM创建外部传入的视图
   *
   * @param temp 外部传入的视图
   */
  @Input('appEmbedTemplate')
  set template(temp: TemplateRef<any>) {
    if (temp !== null && !this.hasView) {
      this._template = temp;
      this.viewContainer.createEmbeddedView(this._template);
      this.hasView = true;
    }
  }
}
