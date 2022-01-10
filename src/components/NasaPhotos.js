import { Flex } from '@chakra-ui/layout'
import React from 'react'
import { useState, useEffect } from 'react'
import NasaPhoto  from './NasaPhoto' 
const apikey = process.env.REACT_APP_NASA_API_KEY;

const NasaPhotos = () => {

    const [nasaPhotos, setNasaPhotos] = useState(null)
   
    useEffect(() => {
        fetchPhotos()

        async function fetchPhotos() {
            const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=20`)
            const photos = await res.json()
            setNasaPhotos(photos)
           
        }
    }, [])

       if (!nasaPhotos)return <p>Loading...</p> 
    return (
        <>
         
            <Flex flexDir='row' p='1rem' width="100vw" height="500px" flexWrap="wrap">
                {nasaPhotos.filter(photo => photo.media_type === 'image').map(photo => (
                    
                    <NasaPhoto photo={photo} key={photo.hdurl} />))}
                
            </Flex>
            </>
    )
}

export default NasaPhotos
