
import {  Flex, Text } from '@chakra-ui/layout';
import NasaPhotos from './components/NasaPhotos.js';
function App() {
  return (

    <Flex as="header" flexDirection='column' p='' >

    <Text fontSize='4xl' pl='1rem' >
      Spacestagram
      </Text>
      <Text fontSize='2xl' pl='1rem'  >
        Brought to you by NASA's Astronomy Photo of the Day (APOD) API
      </Text>
      
        <NasaPhotos/>
      
      
    </Flex>
  );
}

export default App;
