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
            <Text textAlign='justify' color='font' lineHeight='4rem'>MasterBot pone a disposición de los Usuarios o Clientes los presentes Términos y
              Condiciones de la administración de bot denominado “Master Bot” (en adelante “Los Servicios”),
              el cual es ofrecido a Clientes, conjuntamente (en adelante “Las Partes”).  LOS PRESENTES TÉRMINOS Y
              CONDICIONES TIENEN UN CAR QUE NO ACEPTE LOS PRESENTES  CARÁCTER OBLIGATORIO Y VINCULANTE. CUALQUIER
              PERSONA TÉRMINOS Y CONDICIONES GENERALES DEBER SERVICIOS. Previo a realizar la inscripción  ABSTENERSE
              DE UTILIZAR como Usuario y/o Cliente (en adelante indistintamente el &quot;Usuario&quot; o el &quot;Administador&quot;),
              el Usuario debe leer, entender y aceptar todas las condiciones establecidas en los presentes Términos
              y Condiciones, en el Aviso de Privacidad, en la administración, así como en los demás documentos incorporados
              a los mismos por referencia.</Text>
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
        >{textCheck} <Link
            color='primary'
            fontSize='1.2rem'
            _hover={{ textDecoration: 'none' }}
            onClick={onOpen}>{linkCheck}</Link></Checkbox>
        <Spacer />
        <Link color='primary'
          fontSize='1.2rem'
          _hover={{ textDecoration: 'none' }}
          href='/password-recovery'
          display={forgot}>Forgot Password?</Link>
      </Flex>
      <Button variant='btnForm' ref={btnRegister} disabled>SIGN UP</Button>
    </>
  )
}
export { RemenberLogin }
