const initialFileState = {
  fileData: '',
};

export default function handleActions(state = initialFileState, action) {
  switch (action.type) {
    case 'GetFileDataDone':
      return {
        ...state,
        fileData: action.data,
      };
    default:
      return state;
  }
}
