import React, { useState } from 'react';

const SingleImage = ({ image, index, handleSort, dragOverItem, dragItem }) => {

    const [hovered, setHovered] = useState(false);


    return (
        <div
            className='border-2 rounded-xl relative inline-block'
            draggable
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onDragStart={(e) => dragItem.current = index}
            onDragEnter={(e) => dragOverItem.current = index}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
        >
            <img src={image} alt="" className='rounded-xl' />
            {hovered && (
                <div
                    style={{
                        position: 'absolute',
                        borderRadius: "0.75rem",
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        justifyContent: 'left',
                        alignItems: 'start',
                    }}
                >
                    <input className='absolute top-5 left-5 w-5 h-5' type="checkbox" />
                </div>
            )}
        </div>
    );
};

export default SingleImage;