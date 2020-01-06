/*
export function someMutation (state) {
}
*/

export function LOAD_LISTS (state, lists) {
  const newLists = [ ...lists ]
  state = { ...state, newLists }
}
