import { useContext } from 'react';
import { PostContext } from '../context';

const usePosts = () => {
    const { state, dispatch } = useContext(PostContext)
    return { state, dispatch }
};

export default usePosts;