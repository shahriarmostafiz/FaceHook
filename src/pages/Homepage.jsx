import React, { useEffect, useReducer } from 'react';
import PostList from '../components/profile/PostLists/PostList';
import { initialState, postReducer } from '../reducer/postReducer';
import { actions } from '../actions';
import useAxios from '../hooks/useAxios';

const MyHomePage = () => {

    const [state, dispatch] = useReducer(postReducer, initialState)
    const { api } = useAxios()
    useEffect(() => {
        dispatch({ type: actions.posts.Data_Fetching })
        const postFetch = async () => {
            try {
                const res = await api.get("/posts")
                console.log("Res", res);
                if (res.status === 200) {
                    dispatch({ type: actions.posts.Data_Fetched, data: res.data })
                }
            } catch (error) {
                console.log(error);
                dispatch({
                    type: actions.posts.Data_Fetch_Error,
                    error: error.message
                })
            }
        }

        postFetch()
    }, [])

    if (state?.loading) {
        return <h1>loading posts ...</h1>
    }
    return (
        <div>
            <PostList posts={state?.posts} />
            {/* {state?.posts?.length} */}
        </div>
    );
};

export default MyHomePage;