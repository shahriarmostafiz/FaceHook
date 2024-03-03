import React from 'react';
import ProfileImage from './ProfileImage';
import useProfile from '../../hooks/useProfile';
import Bio from './Bio';
import editIcon from "../../assets/icons/edit.svg"

const ProfileInfo = () => {
    const { state } = useProfile()
    const user = state?.user
    return (
        <div className="flex flex-col items-center py-8 text-center gap-4">
            {/* <!-- profile image --> */}
            <ProfileImage user={user} editIcon={editIcon} />

            {/* <!-- name , email --> */}
            <div className='text-cyan-500'>
                <h3 className="text-2xl font-semibold  lg:text-[28px]">
                    {user?.firstName} {" "} {user?.lastName}
                </h3>
                <p className="leading-[231%] lg:text-lg">
                    {user?.email}
                </p>
            </div>

            {/* <!-- bio --> */}
            <Bio bio={user?.bio} editIcon={editIcon} />

            <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
        </div>
    );
};

export default ProfileInfo;