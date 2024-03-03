import { actions } from "../actions";

const initialState = {
  loading: false,
  error: null,
  posts: [],
  user: null,
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case actions.profile.Data_Fetching: {
      return {
        ...state,
        loading: true,
      };
    }

    case actions.profile.Data_Fetched: {
      return {
        ...state,
        loading: false,
        user: action.data.user,
        posts: action.data.posts,
      };
    }
    case actions.profile.User_data_Edited: {
      return {
        ...state,
        loading: false,
        user: action.data,
      };
    }
    case actions.profile.Image_Updated: {
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
          avatar: action.data.avatar,
        },
      };
    }

    case actions.profile.Data_Fetch_Error: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }

    default: {
      return state;
    }
  }
};
export { profileReducer, initialState };
