import { useDisclosure } from "@chakra-ui/hooks";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import {Recurrence} from "./Components/Recurrence";
import { Button } from '@chakra-ui/react';


function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
    {/* <Recurrence /> */}
      <Modal onClose={onClose} isOpen={true} isCentered >
        <ModalOverlay />
        <ModalContent maxW={"600px"}>
          <ModalHeader>Set recurrence</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
          <Recurrence />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
