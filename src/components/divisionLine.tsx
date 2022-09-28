import { Text, Flex } from '@chakra-ui/react'

function DivisionLine (): JSX.Element {
  return (
    <>
      <Flex align='center'
        justifyContent='center'
        m='2.5rem 0'
        h='1px'
        w='100%'
        bg='rgba(135, 140, 189, 0.3)' >
        <Text color='gray.400'
          mx='1.4rem'
          bg='gray.100'
          p='4'
          fontSize='1.4rem'>
          or
        </Text>
      </Flex>
    </>
  )
}
export default DivisionLine
