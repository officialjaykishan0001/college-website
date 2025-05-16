import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { GALLERY_API_ENDPOINT } from '../utils/constant';
import axios from 'axios'
import { setAllImages } from '../redux/gallerySlice';

const useGetAllImages = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllImages = async () => {
            try {
                const res = await axios.get(`${GALLERY_API_ENDPOINT}/get`, { withCredentials: true });
                if(res.data.success){
                    dispatch(setAllImages(res.data.images));
                }

            } catch (err) {
                console.log(err);
            }
        }
        fetchAllImages();
    }, [dispatch])

}

export default useGetAllImages
