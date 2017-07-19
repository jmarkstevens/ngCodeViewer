'use strict';

import './css/index.css';
import './css/scrollbar.css';
import './css/twilightj.css';

import './img/favicon.ico';
import './img/sun.ico';
import './img/leaf.ico';
import './img/snow.ico';
import './img/fire.ico';
import './img/1x1TransShim.gif';

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {NgReduxModule, NgRedux} from '@angular-redux/store';

import {JmsCommon} from './common/common.module';
import {APP_DECLARATIONS} from './components/app.declarations';

import {AppComponent} from './components/app-component';

import store from './store/App.Store';

@NgModule({
  imports: [
    BrowserModule, JmsCommon, NgReduxModule
  ],
  declarations: [
    AppComponent, APP_DECLARATIONS
  ],
  bootstrap: [AppComponent]
})
class AppModule {
  constructor(ngRedux) {
    this.ngRedux = ngRedux;
    this.ngRedux.provideStore(store);
  }
}
AppModule.parameters = [
  [NgRedux]
];


platformBrowserDynamic().bootstrapModule(AppModule);
