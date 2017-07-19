import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'jms-input',
  template: require('./jms-input.html'),
  styles: [require('./jms-input.css')]
})
export class jmsInput {
  @Input()input = {};
  @Output()onValueChanged = new EventEmitter();

  textChanged = (value, initial) => {
    if (value && value !== initial) {
      this.onValueChanged.emit(value);
    }
  }
  valueChanged = value => {
    this.onValueChanged.emit(value);
  }
}
