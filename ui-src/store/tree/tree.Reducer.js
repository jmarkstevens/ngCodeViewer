
function _gotTreeViewState(treedata, tvState) {
  let _currentTreeNode = _getSelected(treedata, tvState.selected);
  if (_currentTreeNode == null)
    _currentTreeNode = treedata[0];
  return {tvState, currentTreeNode: _currentTreeNode};
}

function _getSelected(tree, nodeid) {
  let result = null;
  tree.forEach(function(node) {
    if (node.nodeid === nodeid)
      result = node;
    if (result == null && node.children && node.children.length > 0)
      result = _getSelected(node.children, nodeid);
    }
  );
  return result;
}

const initialTreeState = {
  treeData: [{}],
  currentTreeNode: {title: 'not selected'},
  tvState: {
    id: 'nodeid',
    selected: '',
    showChildren: {}
  }
};

export default function handleActions(state = initialTreeState, action) {
  let treeCopy = state.treeData.slice(0);
  switch (action.type) {
    case 'GetTreeDataStateDone':
      {
        if (action.data.selected) {
          let tvData = _gotTreeViewState(treeCopy, action.data);
          return {
            ...state,
            ...tvData
          }
        } else {
          return {
            ...state,
            tvState: action.data
          }
        }
      }
    case 'GetTreeDataDone':
      return {
        ...state,
        treeData: action.data.slice(0)
      };
    case 'SetCurrentItem':
      return {
        ...state,
        currentTreeNode: action.item
      };
    case 'SaveTreeState':
      return {
        ...state,
        tvState: action.data
      };
    default: return state;
  }
}
