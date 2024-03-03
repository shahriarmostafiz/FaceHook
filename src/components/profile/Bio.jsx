import React, { useState } from 'react';
import checkIcon from "../../assets/icons/check.svg"
import useProfile from '../../hooks/useProfile';
import { api } from '../../api';
import { actions } from '../../actions';

const Bio = ({ bio, editIcon }) => {
    const [bioState, setBioState] = useState(bio)
    const [isEdit, setIsEdit] = useState(false)
    const { state, dispatch } = useProfile()

    let editUrl = `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${state?.user?.id}`
    console.log(editUrl);
    const handleEdit = async () => {
        console.log({ bioState: bioState });
        try {
            const res = await api.patch(editUrl, { bioState })
            if (res.status === 200) {
                dispatch({ type: actions.profile.User_data_Edited, data: res.data })
            }
        } catch (err) {
            dispatch({ type: actions.profile.Data_Fetch_Error, error: err.message })
            console.log(err);
            alert(err.message)
        }
        finally {
            setIsEdit(false)
        }
    }
    return (
        <div className="mt-4 flex items-start gap-2 lg:mt-6">
            <div className="flex-1">

                {
                    isEdit ? (<textarea
                        className='p-2 className="leading-[188%] text-gray-600 lg:text-lg rounded-md'
                        value={bioState}
                        rows={4}
                        cols={55}
                        onChange={(e) => setBioState(e.target.value)}
                    />) : (<p className="leading-[188%] text-gray-400 lg:text-lg">
                        {bioState}
                    </p>)
                }


            </div>
            {/* <!-- Edit Bio button. The Above bio will be editable when clicking on the button --> */}
            {
                isEdit ? (<button className="flex-center h-7 w-7 rounded-full">
                    <img src={checkIcon} alt="Edit"
                        onClick={handleEdit}
                    />
                </button>) : (<button className="flex-center h-7 w-7 rounded-full"
                    onClick={() => setIsEdit(true)}
                >
                    <img src={editIcon} alt="Edit" />
                </button>)
            }
        </div>
    );
};

export default Bio;