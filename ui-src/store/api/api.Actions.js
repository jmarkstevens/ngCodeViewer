export function apiReadTree() {
  return { type: 'ApiReadTree' };
}

export function apiSetTreeDataState(data) {
  return { type: 'ApiSetTreeDataState', data };
}
