import { Box, Container, Text, Image, Button, Heading, VStack, SimpleGrid, Link } from '@chakra-ui/react'
import { BgCustom } from '@/components'
import ImageBot from '../assets/bot.svg'
import { Link as Linker } from 'react-router-dom'

function Home (): JSX.Element {
  return (
    <>
      <BgCustom>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          w='100vw'
          h='100vh'
          zIndex='3'
        >
          <Container
            maxW='8xl'
            borderRadius='lg'
            p='3rem'
            boxShadow='xl'
            zIndex='4'
            bg='whiteAlpha.700'
            >
              <SimpleGrid columns={2} spacing={10} alignItems='center'>
                <VStack>
                  <Box>
                    <Heading as='h1'
                      size='4xl'
                      color='blackAlpha.700'
                      fontWeight='700'> Power Up Your Discord </Heading>
                    <Text fontSize='2rem'
                      mb='3.2rem' mt='1.6rem'>Improve the game administration experience of your server through our MasterBot !!</Text>
                  </Box>
                <Link as={Linker}
                  to='/login' _hover={{ textDecoration: 'none' }}>
                  <Button variant='btnForm' w='sm'>Let&#39;s get started</Button>
                  </Link>
                </VStack>
                <Image src={ImageBot} height='2xl' />
              </SimpleGrid>

          </Container>
        </Box>

      </BgCustom>
    </>
  )
}
export default Home
