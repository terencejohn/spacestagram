import { Flex,Spinner,Text } from '@chakra-ui/react'
import React from 'react'
import { useState, useEffect } from 'react'
import NasaPhoto  from './NasaPhoto' 
const apikey = process.env.REACT_APP_NASA_API_KEY;

const NasaPhotos = () => {

    const [nasaPhotos, setNasaPhotos] = useState(null)
   
   
    useEffect(() => {
        fetchPhotos()
         async function fetchPhotos() {

        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apikey}&count=100`)

        const photos = await res.json()
        setNasaPhotos(photos)            
        }

     
    }, [])

    

    if (!nasaPhotos) return (
        <Flex justifyContent={'center'} py={4}>
        <Text fontSize={'4xl'} mr="2" >Loading...</Text> 
        <Spinner size='xl' />
        </Flex>) 
    return (
        <>
         
            <Flex as="main" flexDir='row' mt={'4'} p='1rem' justifyContent={'center' }width="100vw" height="500px" flexWrap="wrap">
                {nasaPhotos.filter(photo => photo.media_type === 'image').map(photo => (
                    
                    <NasaPhoto photo={photo} key={photo.hdurl} />))}
                
            </Flex>
            </>
    )
}

export default NasaPhotos
