import { Component, ChangeDetectorRef } from '@angular/core';
import { NgRedux } from '@angular-redux/store';

@Component({
  selector: 'file-view',
  template: require('./file-view.html'),
  styles: [require('./file-view.css')],
})
class FileView {
  constructor(changeDetectorRef, ngRedux) {
    this.changeDetectorRef = changeDetectorRef;
    this.ngRedux = ngRedux;
    this.unsubscribe = this.ngRedux.subscribe(this.subscribeToState);
    this.subscribeToState(1);
  }

  subscribeToState = (first) => {
    this.fileData = this.ngRedux.getState().fileState.fileData;
    if (!first) this.changeDetectorRef.detectChanges();
  };
  getOverFlow = () => (this.fileData.startsWith('<pre>') ? 'hidden' : 'auto');
}
FileView.parameters = [[ChangeDetectorRef], [NgRedux]];

export default FileView;
