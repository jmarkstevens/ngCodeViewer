import {Component, Input} from '@angular/core';
import {NgRedux} from '@angular-redux/store';

import {saveTreeEdit, saveTreeNew, treeActions} from '../../../store/treeview/tree.Actions';
import {actionData} from './tv-action.data';

@Component({
  selector: 'tv-actions',
  template: require('./tv-actions.html'),
  styles: [require('./tv-actions.css')]
})
export class TreeViewActions {
  @Input()currentItem = {};
  itemDetail = {};
  showEdit = false;
  showNew = false;
  btns = actionData.btns;

  constructor(ngRedux) { this.ngRedux = ngRedux; }
  clickHandler = buttonid => {
    switch (buttonid) {
      case 'startNew': this.startNew(); break;
      case 'startEdit': this.startEdit(); break;
      case 'saveNewAfter':
      case 'saveNewBefore':
      case 'saveNewChild': this.ngRedux.dispatch(saveTreeNew(this.itemDetail, buttonid));
      case 'cancelNew': this.showNew = false; break;
      case 'saveEdit': this.ngRedux.dispatch(saveTreeEdit(this.itemDetail));
      case 'cancelEdit': this.showEdit = false; break;
      default: this.ngRedux.dispatch(treeActions(buttonid, this.currentItem));
    };
  };
  startNew = () => {
    this.itemDetail = Object.assign({}, actionData.defaultNewItem);
    this.setDetail(this.itemDetail);
    this.showNew = true;
  };
  startEdit = () => {
    this.itemDetail = Object.assign({}, this.currentItem);
    this.setDetail(this.itemDetail);
    this.showEdit = true;
  };
  setDetail = item => {
    this.titleInput = Object.assign({}, actionData.titleInput);
    this.titleInput.initValue = item.title;
    this.radioInput1 = Object.assign({}, actionData.radioInput1);
    this.radioInput2 = Object.assign({}, actionData.radioInput2);
    this.radioInput3 = Object.assign({}, actionData.radioInput3);
    this.setRadioValues(item.type);
  };
  onValueChanged = (newValue, inputObject) => {
    if (inputObject.name === 'title') this.itemDetail.title = newValue;
    else {
      this.itemDetail.type = newValue;
      this.setRadioValues(newValue);
    }

  };
  setRadioValues = type => {
    this.radioInput1.value = (type === this.radioInput1.radioValue);
    this.radioInput2.value = (type === this.radioInput2.radioValue);
    this.radioInput3.value = (type === this.radioInput3.radioValue);
  };
}
TreeViewActions.parameters = [
  [NgRedux]
];
