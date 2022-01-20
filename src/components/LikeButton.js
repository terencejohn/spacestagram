import React from 'react'
import { IconButton } from '@chakra-ui/react'
import LikeIcon from './LikeIcon'

const LikeButton = () => {

    const [liked, setLiked] = React.useState(false)

function handleClick() {
    setLiked(!liked)
}   


    return (
        <IconButton aria-label='Click to Like' backgroundColor={"transparent"} onClick={handleClick}>
            <LikeIcon liked={liked} />
        </IconButton>
    )
}

export default LikeButton
