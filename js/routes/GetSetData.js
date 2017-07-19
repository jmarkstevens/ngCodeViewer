'use strict';

const fs = require('fs');

const Remarkable = require('remarkable');
const remark = new Remarkable();

const Highlights = require('highlights');
const highlighter = new Highlights();

const config = require('../../config.json');
let configRoot;
switch (process.platform) {
  case 'darwin': configRoot = config.darwin; break;
  case 'linux': configRoot = config.linux; break;
  case 'win32': configRoot = config.win32; break;
}
const dataRoot = configRoot.dataRoot;
const readRoot = configRoot.readRoot;

module.exports.getFileData = function(clientData, doneCallBack) {
  let filePath = readRoot + clientData.filePath;
  function fileReadCallBack(err, data){
    if (err) doneCallBack({fileData: 'folder'});
    else {
      const inData = data.toString();
      const inFile = clientData.filePath;
      let outData = '';
      if (inFile.endsWith('.js')) {
        outData = highlighter.highlightSync({fileContents: inData, scopeName: 'source.js'});
      } else if (inFile.endsWith('.jsx')) {
        outData = highlighter.highlightSync({fileContents: inData, scopeName: 'source.js'});
      } else if (inFile.endsWith('.json')) {
        outData = highlighter.highlightSync({fileContents: inData, scopeName: 'source.json'});
      } else if (inFile.endsWith('.css')) {
        outData = highlighter.highlightSync({fileContents: inData, scopeName: 'source.css'});
      } else if (inFile.endsWith('.html')) {
        outData = highlighter.highlightSync({fileContents: inData, scopeName: 'text.html.basic'});
      } else {
        outData = remark.render(inData);
      }

      return doneCallBack({fileData: outData});
    }
  }
  fs.readFile(filePath, fileReadCallBack);
};

module.exports.getData = function(fileName, doneCallBack) {
  const filePath = `${dataRoot}/${fileName}.json`;
  const jsonReadCallBack = function(err, data){
    if (err) doneCallBack(event, {message: 'Data readFile error'});
    else {
      const jsonData = JSON.parse(data.toString());
      doneCallBack(jsonData);
    }
  };
  fs.readFile(filePath, jsonReadCallBack);
};

module.exports.setData = function(fileName, data, doneCallBack) {
  const filePath = `${dataRoot}/${fileName}.json`;
  const writeFileCallBack = function (err) {
    if (err) doneCallBack(event, {message: 'Data writeFile error', filePath});
    if (doneCallBack) doneCallBack({setResponse: 'ok'});
  };
  fs.writeFile(filePath, JSON.stringify(data, null, 2), writeFileCallBack);
};
