import React from 'react';

const PostBody = ({ poster, content }) => {
    return (
        <div>
            <div className="border-b border-[#3F3F3F] py-4 lg:py-5 lg:text-xl space-y-4">
                {/* If Post has Image, Render this block */}
                {content && <p>
                    {content}
                </p>}
                {poster && <div className="flex items-center justify-center overflow-hidden">
                    <img className="max-w-full" src={`${import.meta.env.VITE_SERVER_BASE_URL}/${poster}`} alt="poster" />
                </div>}

            </div>

        </div>
    );
};

export default PostBody;