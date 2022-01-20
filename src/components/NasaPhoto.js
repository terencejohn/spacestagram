
import { Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
    Image,
    Flex,
    Spacer
} from "@chakra-ui/react"
import LikeButton from "./LikeButton"
  

const NasaPhoto = ({photo}) => {
    return (
        <Center as="article" className="photo" py={12} mx="1rem" >
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
            
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          >
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
                        src={photo.url}
                        alt={photo.title}
          />
        </Box>
          <Stack pt={10} align={'center'}>
            
            {/*Photo Title*/}
            <Heading fontSize={['sm','xl','2xl']} fontFamily={'body'} fontWeight={500} align={'center'}>
            {photo.title}
            </Heading>
            
            {/*Details of the photo*/}
            <Text noOfLines={[3, 4, 6]}>
            {photo.explanation}
            </Text>

            <Flex  >
              <Box>
                <LikeButton />  
              </Box>
              
              <Spacer />
              <Box>
                <Flex direction={'column'} align={'center'} ml={"75"}>
                <Text color={'gray.600'} fontSize={'sm'}>
                  Image date:
                </Text>
                <Spacer />
                <Text color={'gray.600'}>
                  {photo.date}
                </Text>
              </Flex>
            
              </Box>
              </Flex>
          </Stack>
        </Box>
    </Center>
    )
}

export default NasaPhoto
