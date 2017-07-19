'use strict';

let getSetData = require('./routes/GetSetData');
let readTree = require('./routes/readTree');

module.exports = function(socket) {

  let onReadTree = function() { readTree(onGetTreeData); };
  socket.on('client:readTree', onReadTree);

  let getFileDataDone = function(data){ socket.emit('server:GetFileDataDone', data); };
  let onGetFileData = function(data) { getSetData.getFileData(data, getFileDataDone); };
  socket.on('client:getFileData', onGetFileData);

  let getTreeDataDone = function(data){ socket.emit('server:GetTreeDataDone', data); };
  let onGetTreeData = function(){ getSetData.getData('FileTree', getTreeDataDone); };
  socket.on('client:getTreeData', onGetTreeData);

  let getTreeDataStateDone = function(data){ socket.emit('server:GetTreeDataStateDone', data); };
  let onGetTreeDataState = function(){ getSetData.getData('FileTreeState', getTreeDataStateDone); };
  socket.on('client:getTreeDataState', onGetTreeDataState);

  let onSetTreeDataState = function(data){ getSetData.setData('FileTreeState', data); };
  socket.on('client:setTreeDataState', onSetTreeDataState);
};
