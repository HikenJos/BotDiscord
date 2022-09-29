import { Text, Heading, Flex, Icon } from '@chakra-ui/react'
import { SiProbot } from 'react-icons/si'
import { Data } from '@/@types/types'

function HeaderLogin ({ title, description }: Data): JSX.Element {
  return (
    <>
      <Flex justify='center'
        align='center'
        gap='6px'
        mb='2rem'>
        <Icon as={SiProbot}
          fontSize='3.2rem'
          color='font'
        />
        <Heading textAlign='center'
          as='h1'
          size='3xl'
          color='font'
          fontWeight='600'
        >Master<Text
          as='span'
          variant='spanForm'
        >Bot</Text>
        </Heading>
      </Flex>
      <Heading
        as='h3'
        size='xl'
        color='font'
        mb='0.375rem'>{title}</Heading>
      <Text
        fontSize='2xl'
        mb='1.5rem'
        color='font'>{description}</Text>
    </>
  )
}
export { HeaderLogin }
