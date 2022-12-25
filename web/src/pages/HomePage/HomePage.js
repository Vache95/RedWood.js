import {
  AlertDialog,
  AlertDialogContent,
  Button,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useDisclosure,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import { MetaTags } from '@redwoodjs/web'
import { useEffect } from 'react'
// import { useQuery } from '@apollo/client'
import './homepage.scss'
// import { All_TODO } from 'src/apollo/todos'

const HomePage = () => {
  // const { loading, error, data } = useQuery(All_TODO)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json))
  }, [])

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <main>
        <h1>home</h1>
        <Button
          colorScheme="red"
          onClick={onOpen}
          w="200px"
          h="50px"
          fontSize="lg"
          variant="with-shadow"
        >
          Delete Customer
        </Button>

        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Customer
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={onClose} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </main>
    </>
  )
}

export default HomePage
