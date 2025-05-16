import React, { useState } from 'react';
import { Button } from '@radix-ui/themes';
import { CirclePlus, Download, Eye, Trash2 } from 'lucide-react';
import { useSelector } from 'react-redux';
import useGetAllImages from '../../hooks/useGetAllImages';



const AdminGallery = () => {
  useGetAllImages();

  const { allImages } = useSelector(store => store.gallery)

  console.log(allImages)

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
      title: 'Campus main building',
      caption: 'Campus'
    },
    {
      src: 'https://images.unsplash.com/photo-1571501679680-de32f1e7aad4',
      title: 'College Library',
      caption: '' // No caption
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-semibold text-gray-800">Photo Gallery</h1>
        <Button color="blue">
          <CirclePlus /> Add New Album
        </Button>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <div key={idx} className="rounded-lg border bg-white overflow-hidden group hover:shadow-md transition-shadow">
            <div className="relative pb-[56.25%] bg-gray-100">
              <img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <button
                  className="bg-[#c0d4c1d4] hover:bg-[#818881d4] text-sm h-9 px-3 rounded-md flex items-center gap-1"
                  onClick={() => setSelectedImage(img)}
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button className="bg-[#c0d4c1d4] hover:bg-[#818881d4] text-sm h-9 px-3 rounded-md flex items-center gap-1">
                  <Download className="w-4 h-4" />
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white text-sm h-9 px-3 rounded-md flex items-center gap-1">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            {/* Caption */}
            <div className="p-3">
              <h1 className="font-medium text-sm truncate">{img.title}</h1>
              <p className="text-xs text-gray-500">{img.caption || 'No caption provided'}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center">
          <div className="bg-white max-w-2xl w-full rounded-lg overflow-hidden shadow-xl">
            <img
              src={selectedImage.src}
              alt="Full view"
              className="w-full h-[80vh] object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{selectedImage.title}</h2>
              <p className="text-sm text-gray-600 mt-1">
                {selectedImage.caption || 'No caption provided'}
              </p>
              <div className="text-right mt-4">
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                  onClick={() => setSelectedImage(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminGallery;
