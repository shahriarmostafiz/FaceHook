/* eslint-disable react/prop-types */
import React, { useRef } from 'react';
import useAxios from '../../hooks/useAxios';
import useProfile from '../../hooks/useProfile';
import { actions } from '../../actions';
// import editIcon from "../../assets/icons/edit.svg"


const ProfileImage = ({ user, editIcon }) => {
    const baseUrl = import.meta.env.VITE_SERVER_BASE_URL
    const imageUrl = `${baseUrl}/${user?.avatar}`
    const fileRef = useRef(null)
    const { api } = useAxios()
    const { dispatch } = useProfile()
    const handleEdit = (e) => {
        e.preventDefault()
        // console.log(fileRef.current);
        fileRef.current.click()
        fileRef.current.addEventListener("change", uploadFile)
    }
    const uploadFile = async () => {
        try {

            const formData = new FormData()
            for (const file of fileRef.current.files) {
                console.log(file);
                formData.append("avatar", file)
            }
            const res = await api.post(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${user?.id}/avatar`, formData)
            if (res.status === 200) {
                console.log(res);
                dispatch({ type: actions.profile.Image_Updated, data: res.data })
            }
        } catch (err) {
            console.log(err);
            dispatch({ type: actions.profile.Data_Fetch_Error, error: err.message })
        }

    }
    return (
        <div>
            <div
                className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-11 lg:h-[218px] lg:w-[218px] "
            >
                <img
                    className="h-full w-full  rounded-full"

                    src={imageUrl}
                    alt={user?.firstName}
                />

                <form action="
               ">
                    <button
                        onClick={handleEdit}
                        type='submit'
                        className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
                    >
                        <img src={editIcon} alt="Edit" />
                    </button>
                    <input type="file" name="" id="file" className='hidden' ref={fileRef} />

                </form>
            </div>
        </div>
    );
};

export default ProfileImage;