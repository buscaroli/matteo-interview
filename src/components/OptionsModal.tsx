
import { FC, useState } from "react";
import { atom } from "recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { playerOneDetails, playerTwoDetails } from "state"


import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  Text,
  Input
} from '@chakra-ui/react'

const OptionsModal: FC = () => {

  
// const pOneSetDetails = useSetRecoilState(atom({key: 'playerOneDetails', default: [pOneName, '##f10000']}))

  // Matteo: ChakraUI hook for controlling the Modal
  const { isOpen, onOpen, onClose } = useDisclosure()

  // Matteo: collect the state for the players name as the default values
  const pOneDetails = useRecoilValue(playerOneDetails)
  const pTwoDetails = useRecoilValue(playerTwoDetails)

  // Matteo: get the default names from const/index.ts
  const [pOneName, setPOneName] = useState(localStorage.getItem('playerOneName') || pOneDetails[0].toString())
  const [pTwoName, setPTwoName] = useState(localStorage.getItem('playerTwoName') || pTwoDetails[0].toString())
  

  // Matteo: controlled components for the names of the players
  const playerOneNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPOneName(e.target.value)
      localStorage.setItem('playerOneName', e.target.value)
  }

  const playerTwoNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPTwoName(e.target.value)
      localStorage.setItem('playerTwoName', e.target.value)
  }
  

  return (

    <>
      <Button onClick={onOpen}>Options</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Players' Options</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex 
              alignItems="center"
              justifyContent="space-around"
            >
              <Flex 
                flexDirection="column"
                justify="space-around"
                alignItems="center"
              >
                <Text fontSize='2xl' mb='20px'>Player 1</Text>

                <Input 
                  onChange={playerOneNameHandler}
                  placeholder={pOneName} 
                  size='md' 
                  width='80%'/>
              </Flex>
              
              <Flex 
                flexDirection="column"
                justify="space-around"
                alignItems="center"
              >
                <Text fontSize='2xl'  mb='20px'>Player 2</Text>

                <Input 
                  onChange={playerTwoNameHandler}
                  placeholder={pTwoName}
                  size='md' 
                  width='80%'/>
              </Flex>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Save
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default OptionsModal
