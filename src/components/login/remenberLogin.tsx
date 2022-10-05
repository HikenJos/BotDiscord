import {
  Flex, Checkbox, Spacer, Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  Button
} from '@chakra-ui/react'
import { Link as Linker } from 'react-router-dom'
import { Remenber } from '@/@types/types'
import { useRef } from 'react'
import disabledButton from '@/functions/disableButton'

function RemenberLogin ({ textCheck, linkCheck, forgot }: Remenber): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const CheckBx = useRef<HTMLInputElement>(null)
  const btnRegister = useRef(null)

  return (
    <>
      <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody p='2.5rem' bg='gray.100' rounded='lg'>
          <ModalHeader as='h1' fontSize='3xl' textAlign='center' color='font' fontWeight='700'>PRIVACCY POLICY & TERMS</ModalHeader>
          <ModalCloseButton />
            <Text textAlign='justify' color='font' lineHeight='4rem'>MasterBot makes available to Users or Clients these Terms and Conditions for the administration of the bot called “Master Bot”
              (hereinafter “The Services”), which is offered to Clients, jointly (hereinafter “The Parties”). THE PRESENT TERMS AND CONDITIONS
              HAVE A CAR THAT DOES NOT ACCEPT THESE MANDATORY AND BINDING NATURE. ANY PERSON GENERAL TERMS AND CONDITIONS DUTY SERVICES. Prior to registering, REFRAIN FROM USING as a User and/or
              Client (hereinafter indistinctly the “User” or the “Administrator”), the User must read, understand and accept all the conditions established in these Terms and Conditions, in
              the Privacy Notice, in the administration, as well as in the other documents incorporated therein by reference.</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex mb='2rem'>
        <Checkbox
          size='lg'
          iconSize='2rem'
          colorScheme='purple'
          color='font'
          onChange={() => disabledButton(CheckBx, btnRegister)}
          ref={CheckBx}
        >{textCheck}</Checkbox>
        <Link
          color='primary'
          fontSize='1.2rem'
          _hover={{ textDecoration: 'none' }}
          onClick={onOpen}>{linkCheck}</Link>
        <Spacer />
          <Link
            as={Linker}
            to='/password-recovery'
            color='primary'
            fontSize='1.2rem'
            _hover={{ textDecoration: 'none' }}
            display={forgot}>Forgot Password?</Link>
      </Flex>
      <Button variant='btnForm' ref={btnRegister} disabled>SIGN UP</Button>
    </>
  )
}
export { RemenberLogin }
