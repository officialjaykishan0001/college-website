import { Button } from '@radix-ui/themes';
import { CirclePlus, X } from 'lucide-react';
import React, { useState } from 'react';

const AdminGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: '/logo.png',
      caption: 'Annual Function 2024',
    },
    {
      src: '/indiagovin.png',
      caption: 'dfsdf',
    },
    {
      src: 'https://via.placeholder.com/400x225?text=Photo+3',
    },
    {
      src: 'https://via.placeholder.com/400x225?text=Photo+4',
      caption: 'Independence Day Celebration',
    },
  ];

  return (
    <div className='space-y-6'>
      <div className="flex justify-between items-center">
        <h1 className='text-3xl font-semibold text-gray-800'>Photo Gallery</h1>
        <Button color='blue'>
          <CirclePlus /> Add New Album
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, idx) => (
          <div
            key={idx}
            className='rounded-lg border bg-white shadow-sm overflow-hidden group hover:shadow-md transition-shadow cursor-pointer'
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative aspect-video">
              <img
                src={image.src}
                alt={image.caption || `Gallery Image ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg p-4 max-w-xl w-full relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
            >
              <X />
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.caption || 'Image'}
              className="w-full h-auto rounded-md mb-4"
            />
            <p className="text-lg text-gray-700 text-center">
              {selectedImage.caption?.trim()
                ? selectedImage.caption
                : 'No caption provided'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminGallery;
