import { useEffect } from 'react';
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';
import useProfile from '../hooks/useProfile';
import { actions } from '../actions';
import ProfileInfo from '../components/profile/ProfileInfo';
import ProfilePosts from '../components/profile/ProfilePosts';

const MyProfilePage = () => {
    // const [user, setUser] = useState(null)
    // const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)
    const { state, dispatch } = useProfile()
    const { api } = useAxios()
    const { auth } = useAuth()


    useEffect(() => {
        dispatch({ type: actions.profile.Data_Fetching })
        const fetchProfile = async () => {
            try {
                const res = await api.get(`/profile/${auth?.user?.id}`)
                // setUser(res.data.user)
                // setPosts(res.data.posts)
                if (res.status === 200) {
                    dispatch({ type: actions.profile.Data_Fetched, data: res.data })
                }

            } catch (error) {
                console.error(error);
                dispatch({ type: actions.profile.Data_Fetch_Error, error: error.message })
            }
        }
        fetchProfile()
    }, [])

    if (state?.loading) {
        return <h1 className="text-xl animate-bounce">Loading</h1>
    }
    return (
        <main className="mx-auto max-w-[1020px] py-8">
            <div className="container">
                {/* <!-- profile info --> */}
                <ProfileInfo />
                {/* <!-- end profile info --> */}
                <ProfilePosts />

                {/* <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Posts</h4> */}

                {/* <!-- post  --> */}



                {/* <!-- post ends --> */}
            </div>
        </main>
    );
};

export default MyProfilePage;