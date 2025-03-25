import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";

const ShowGalleryImg = ({ src, onClose }) => {
    return (
        <Dialog.Root open={!!src} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
                <Dialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg shadow-lg max-w-lg w-full z-50">
                    <button onClick={onClose} className="absolute top-2 right-2">
                        <X className="w-6 h-6 text-gray-700 hover:text-black" />
                    </button>
                    <img src={src} alt="Gallery" className="w-full h-auto rounded-lg" />
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ShowGalleryImg;
