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
  const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]
  const [images,setImages] = useState(imgs)

  const dragItem = useRef(null)
  const dragOverItem = useRef(null)

  const handleSort = () => {
    // duplicate the array
    const _images = [...images]

    // save the drag item content
    const dragImage = _images.splice(dragItem.current,1)[0]

    // switch the draged item
    _images.splice(dragOverItem.current, 0, dragImage)

    // reset position of the ref
    dragItem.current = null
    dragOverItem.current = null

    // update the actual array
    setImages(_images);
  }

  return (
    <div className="App">
      {/* Header section */}
      <header className="App-header p-5 flex justify-between">
        <div>
          <h1>Items selected</h1>
        </div>
        <div>
          <button type='button' className='bg-teal-700 px-5 py-2 rounded-xl hover:bg-cyan-700'>Delete</button>
        </div>
      </header>

      {/* gallery section */}
      <section className='m-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
          {
            images.map((image, index) => index ?
              <SingleImage
                key={index}
                image={image}
                index={index}
                dragItem={dragItem}
                dragOverItem={dragOverItem}
                handleSort={handleSort}
              ></SingleImage>
              :
              <div className='col-span-2 row-span-2'>
                <SingleImage
                  key={index}
                  image={image}
                  index={index}
                  dragItem={dragItem}
                  dragOverItem={dragOverItem}
                  handleSort={handleSort}
                ></SingleImage>
              </div>
            )
          }
          <div className='w-full h-full border-2 rounded-xl'>
            <input type="file" name="" id="" className='w-full h-full rounded-xl' />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
