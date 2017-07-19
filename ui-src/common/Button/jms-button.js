import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'jms-button',
  template: require('./jms-button.html'),
  styles: [require('./jms-button.css')]
})
export class jmsButton {
  @Input() btn = {};
  @Output() onBtnClicked = new EventEmitter();

  constructor() {}
  onBtnClick = () => { this.onBtnClicked.emit(); };
}
