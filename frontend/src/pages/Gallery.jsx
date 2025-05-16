import React, { useState } from 'react'
import ShowGalleryImg from '../components/ShowGalleryImg';

const Gallery = () => {
  
    const images = [
        "http://www.sgrpgcollege.in/images/principal.jpg",
        "http://www.sgrpgcollege.in/images/CollegeFront.jpg",
    ];

    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <div className='w-full p-4 bg-[#f2f2f2]'>
                <h1 className='flex justify-center text-4xl font-semibold '>Gallery</h1>
            </div>
            <div className="max-w-6xl mx-auto mt-5 border border-gray-300 rounded-md shadow-lg shadow-gray-300 p-4 bg-white">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            className="w-full h-40 object-cover rounded-lg shadow-md "
                            onClick={() => setSelectedImage(src)}
                        />
                    ))}
                </div>
            </div>
            {selectedImage && <ShowGalleryImg src={selectedImage} onClose={() => setSelectedImage(null)} />}
        </div>
    )
}

export default Gallery
