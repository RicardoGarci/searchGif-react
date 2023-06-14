
 import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
 
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    
    useEffect( () => {
        getImages();
    }, []);



    return {
        images,
        isLoading
    }

}

 const useDataBase = (category2) => {

    const [load, setLoad] = useState([]);
    const [isCharge, setIsCharge] = useState(false);

    const getLoad = async () => {
  
    

    }
 }