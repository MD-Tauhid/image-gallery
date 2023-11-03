import React, { useState } from 'react';

const SingleImage = ({ image, index, dragItem, dragOverItem, handleSort, setSelectItems, selectItems }) => {

    const [hovered, setHovered] = useState(false);

    const handleChange = (e, index) => {
        const status = e.target.checked
        if (status) {
            setSelectItems({ ...selectItems, [index]: status })
        }
        else {
            let _selectItems = { ...selectItems }
            delete _selectItems[index]

            if (selectItems[index]) {
                setSelectItems({ ..._selectItems })
            }
        }
    }

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
            <img src={image} alt="" className='rounded-xl w-full h-full' />
            {hovered && (
                <div className='absolute rounded-xl top-0 left-0 w-full h-full flex justify-start align-top' style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <input
                        id='check'
                        className='absolute top-5 left-5 w-5 h-5'
                        type="checkbox"
                        // checked={selectItems[index] || false}
                        onChange={(e) => handleChange(e, index)}
                    />
                </div>
            )}
        </div>
    );
};

export default SingleImage;