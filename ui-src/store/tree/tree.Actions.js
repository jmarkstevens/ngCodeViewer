import { apiSetTreeDataState } from '../api/api.Actions';

export function saveTreeState(data) {
  return (dispatch) => {
    dispatch({ type: 'SaveTreeState', data });
    dispatch(apiSetTreeDataState(data));
    dispatch(getFileData());
  };
}

export function getTreeDataDone(data) {
  return (dispatch) => {
    dispatch({ type: 'GetTreeDataDone', data });
    dispatch({ type: 'ApiGetTreeDataState' });
  };
}

export function getTreeDataStateDone(data) {
  return (dispatch) => {
    dispatch({ type: 'GetTreeDataStateDone', data });
    dispatch(getFileData());
  };
}

export function getFileData() {
  return (dispatch, getState) => {
    const data = getState().treeState.tvState;
    if (data.selected) {
      const filePath = data.selected;
      dispatch({ type: 'ApiGetFileData', data: { filePath } });
    }
  };
}
