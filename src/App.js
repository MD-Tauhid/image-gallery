// import logo from './logo.svg';
import './App.css';
import img1 from './assets/images/image-1.webp';
import img2 from './assets/images/image-2.webp';
import img3 from './assets/images/image-3.webp';
import img4 from './assets/images/image-4.webp';
import img5 from './assets/images/image-5.webp';
import img6 from './assets/images/image-6.webp';
import img7 from './assets/images/image-7.webp';
import img8 from './assets/images/image-8.webp';
import img9 from './assets/images/image-9.webp';
import img10 from './assets/images/image-10.jpeg';
import img11 from './assets/images/image-11.jpeg';

import SingleImage from './SingleImage/SingleImage';
import { useRef, useState } from 'react';

function App() {
  // get all the images in an array
  const imgs = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 },
    { id: 6, img: img6 },
    { id: 7, img: img7 },
    { id: 8, img: img8 },
    { id: 9, img: img9 },
    { id: 10, img: img10 },
    { id: 11, img: img11 }
  ]
  const [images, setImages] = useState(imgs)

  // --------------------------------------------Drag to reorder item--------------------------------------------
  // to capture drag item
  const dragItem = useRef(null)
  const dragOverItem = useRef(null)

  const handleSort = () => {
    // duplicate the array
    const _images = [...images]

    // save the drag item content
    const dragImage = _images.splice(dragItem.current, 1)[0]

    // switch the draged item
    _images.splice(dragOverItem.current, 0, dragImage)

    // reset position of the ref
    dragItem.current = null
    dragOverItem.current = null

    // update the actual array
    setImages(_images);
  }
  // --------------------------------------------Drag to reorder item End--------------------------------------------

  // -----------------------------------------------Select items start-----------------------------------------------
  const [selectItems, setSelectItems] = useState({})
  const itemsLength = Object.keys(selectItems).length
  // -----------------------------------------------Select items end-----------------------------------------------

  // -----------------------------------------------Delete Start-----------------------------------------------
  const handleDelete = () => {
    const selected = Object.keys(selectItems)
    console.log(selected)
    const newImages = [...images]
    selected.forEach(id =>{
      const idx = newImages.indexOf(newImages.find(im=>im.id==id))
      if(idx !== -1){
        newImages.splice(idx,1)
      }
    })
    setImages(newImages);

    setSelectItems({})
  }
  // -----------------------------------------------Delete End-----------------------------------------------

  return (
    <div className="App">
      {/* Header section */}
      <header className="App-header flex justify-start items-center shadow-md">
        {
          itemsLength > 0 ?
            <div className='w-full mx-10 flex justify-between font-bold'>
              <div className='flex items-center'>
                <input className='w-5 h-5 me-3' type="checkbox" name="" id="" checked />
                <h1>{itemsLength} {itemsLength > 1 ? "Files" : "File"} Selected</h1>
              </div>
              <button onClick={handleDelete} type='button' className='rounded-xl text-orange-700'>
                Delete {itemsLength > 1 ? "files" : "file"}
              </button>
            </div>
            :
            <div className='mx-10'>
              <h1 className='left-0 text-2xl font-bold'>Gallery</h1>
            </div>
        }
      </header>

      {/* gallery section */}
      <section className='m-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {
            images.map((image, index) =>
              <SingleImage
                key={image.id}
                image={image.img}
                index={index}
                id={image.id}
                dragItem={dragItem}
                dragOverItem={dragOverItem}
                handleSort={handleSort}
                selectItems={selectItems}
                setSelectItems={setSelectItems}
              ></SingleImage>
            )
          }

          {/* input field in the last */}
          <label htmlFor='#file' className='w-full h-full border-2 rounded-xl cursor-pointer flex items-center justify-center text-xl font-semibold'>
            <input type="file" name="Add Image" id="file" className='hidden' />
            + Add Image
          </label>
        </div>
      </section>
    </div>
  );
}

export default App;
