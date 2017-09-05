import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

import { saveTreeState } from '../../store/tree/tree.Actions';

@Component({
  selector: 'tree-view',
  template: require('./tree-view.html'),
  styles: [require('./tree-view.css')],
})
class TreeView implements OnDestroy {
  iconOptions = { icons: { 0: './img/sun.ico', 1: './img/leaf.ico' }, node: 'showChildren' };
  titleColors = { normal: '#CDA869', selected: '#CF6A4C' };
  tvState = {};

  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeToState);
    this.subscribeToState(1);
  }

  ngOnDestroy() {
    this.unsubscribe();
  }

  onItemSelected = () => {
    this.ngRedux.dispatch(saveTreeState(this.tvState));
  };

  subscribeToState = (first) => {
    this.treeList = this.ngRedux.getState().treeState.treeData;
    this.tvState = this.ngRedux.getState().treeState.tvState;
    if (!first) this.changeDetectorRef.detectChanges();
  };
}
TreeView.parameters = [[ChangeDetectorRef], [NgRedux]];

export default TreeView;
