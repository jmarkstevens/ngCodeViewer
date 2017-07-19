import {ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'jms-tree-view',
  template: require('./jms-tree-view.html'),
  styles: [require('./jms-tree-view.css')]
})
export class jmsTreeView {
  @Input()iconOptions = {};
  @Input()tvState = {};
  @Input()treeList = [{}];
  @Input()titleColors = {normal: '#fff', selected: '#b4dbc0'};
  @Output()onItemSelected = new EventEmitter();
  @Output()onShowChildren = new EventEmitter();

  constructor(changeDetectorRef) {
    this.changeDetectorRef = changeDetectorRef;
  }
  iconClick = item => {
    if (item.children && item.children.length > 0) {
      this.tvState.showChildren[item[this.tvState.id]] = this.tvState.showChildren[item[this.tvState.id]] ? 0 : 1;
      this.onShowChildren.emit(item);
      this.changeDetectorRef.detectChanges();
    } else {
      this.titleClick(item);
    }
  }
  titleClick = item => {
    this.tvState.selected = item[this.tvState.id];
    this.onItemSelected.emit(item);
    this.changeDetectorRef.detectChanges();
  }
  getTitleColor = item => {
    return item[this.tvState.id] === this.tvState.selected ? this.titleColors.selected : this.titleColors.normal;
  }
  getIconBack = item => {
    if (item.children && item.children.length > 0) {
      let icon = 0;
      if (this.iconOptions.node === 'showChildren') icon = this.tvState.showChildren[item[this.tvState.id]] || 0;
      else icon = item[this.iconOptions.node];
      let iconBack = this.iconOptions.icons[icon];
      return iconBack;
    } else {
      return './img/1x1TransShim.gif';
    }
  }
}
jmsTreeView.parameters = [
  [ChangeDetectorRef]
];
