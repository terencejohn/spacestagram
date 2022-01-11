
import { Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image } from "@chakra-ui/react"
const NasaPhoto = ({photo}) => {
    return (
        <Center py={12} mx="1rem" >
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
       
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500} align={'center'}>
            {photo.title}
          </Heading>
          <Stack direction={'row'} align={'center'} spacing={'5rem'}>
            <Text fontWeight={800} fontSize={'xl'}>
              Like
            </Text>
            <Text  color={'gray.600'}>
              Share
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Center>
    )
}

export default NasaPhoto
