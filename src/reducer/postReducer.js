import { actions } from "../actions";

const initialState = {
  posts: [],
  loading: false,
  error: null,
};
const postReducer = (state, action) => {
  switch (action.type) {
    case actions.posts.Data_Fetching: {
      return { ...state, loading: true };
    }
    case actions.posts.Data_Fetched: {
      return { ...state, loading: false, posts: action.data };
    }
    case actions.posts.Data_Fetch_Error: {
      return { ...state, error: action.error, loading: false };
    }
    case actions.posts.Post_data_Created: {
      return { ...state, loading: false, posts: [...state.posts, action.data] };
    }
    default: {
      return state;
    }
  }
};
export { initialState, postReducer };
