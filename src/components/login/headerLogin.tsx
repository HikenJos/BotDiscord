import React from 'react'
import { Text, Heading, Flex, Icon } from '@chakra-ui/react'
import { SiProbot } from 'react-icons/si'

function HeaderLogin (): JSX.Element {
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
        mb='0.375rem'>Welcome to BotDiscord! 👋</Heading>
      <Text
        fontSize='2xl'
        mb='1.5rem'
        color='font'>Please sign-in to your account and start the adventure</Text>
    </>
  )
}
export default HeaderLogin
