import { Icon } from '@chakra-ui/react'
import React from 'react'
import {FaHeart } from 'react-icons/fa'

const LikeIcon = (props) => {

    const {liked} = props
    return (
        
        <Icon as={FaHeart} w={8} h={8} color={ liked ?'red':'gray.300'} />
    )
}

export default LikeIcon
