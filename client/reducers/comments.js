function postComments(state= [], action) {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }];

    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),  // from the start to the one we want to delete
        ...state.slice(action.index + 1)  // after the deleted one to the end
      ];

    default:
      return state;
  }

  return state;
}

export default function comments(state = [], action) {
  if (typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}
