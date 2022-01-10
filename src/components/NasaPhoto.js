
import { Image,Text,Flex,AspectRatio } from "@chakra-ui/react"
const NasaPhoto = ({photo}) => {
    return (
        <Flex flexDir="column"  >
            <AspectRatio ratio={16/9} >
            <Image src={photo.url} alt={photo.title} />
            </AspectRatio>
            <Text fontSize='1xl' pl='1rem'  >
                {photo.title}
            </Text>

      </Flex>
    )
}

export default NasaPhoto
