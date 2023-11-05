import React, { useState } from 'react';

const SingleImage = ({ image, index, id, dragItem, dragOverItem, handleSort, setSelectItems, selectItems }) => {

    const [hovered, setHovered] = useState(false);

    const handleChange = (e, id) => {
        const status = e.target.checked
        if (status) {
            setSelectItems({ ...selectItems, [id]: status })
        }
        else {
            let _selectItems = { ...selectItems }
            delete _selectItems[id]

            if (selectItems[index]) {
                setSelectItems({ ..._selectItems })
            }
        }
    }

    return (
        <div
            className={index > 0 ? 'border-2 rounded-xl relative inline-block' : 'col-span-2 row-span-2 border-2 rounded-xl relative inline-block'}
            draggable
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onDragStart={(e) => dragItem.current = index}
            onDragEnter={(e) => dragOverItem.current = index}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
        >
            <img src={image} alt="" className='rounded-xl w-full h-full' />
            {hovered &&(
                <div className='absolute rounded-xl top-0 left-0 w-full h-full flex justify-start align-top' style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <input
                        id='check'
                        className='absolute top-5 left-5 w-5 h-5'
                        type="checkbox"
                        checked={selectItems[id] || false}
                        onChange={(e) => handleChange(e, id)}
                    />
                </div>
            )}
            {selectItems[id] &&(
                <div className='absolute rounded-xl top-0 left-0 w-full h-full flex justify-start align-top' style={{ background: 'rgba(0,0,0,0.5)' }}>
                    <input
                        id='check'
                        className='absolute top-5 left-5 w-5 h-5'
                        type="checkbox"
                        checked={selectItems[id] || false}
                        onChange={(e) => handleChange(e, id)}
                    />
                </div>
            )}
        </div>
    );
};

export default SingleImage;