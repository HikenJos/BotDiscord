import { IconButton, Center } from '@chakra-ui/react'
import { AiOutlineGoogle } from 'react-icons/ai'

function IconFooter (): JSX.Element {
  return (
    <>
      <Center gap='1rem'>
        <IconButton icon={<AiOutlineGoogle />}
          p='2rem .5rem'
          aria-label='logo-google'
          variant='btnIcon'
        ></IconButton>
      </Center>
    </>
  )
}

export { IconFooter }
