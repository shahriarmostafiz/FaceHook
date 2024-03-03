import { useContext } from 'react';
import { ProfileContext } from '../context';

const useProfile = () => {
    const { state, dispatch } = useContext(ProfileContext)
    return { state, dispatch }
};

export default useProfile;