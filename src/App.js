import {Heading} from '@chakra-ui/react'
import TodoList from './components/TodoList'
import AddToDo from './components/AddToDo'
import {VStack, IconButton} from '@chakra-ui/react'
import {FaSun,FaMoon} from 'react-icons/fa'

function App() {
  return (
    <div className="App">
      <VStack p={4}>
        <IconButton icon={<FaSun/>} isRound={true} size='lg' alignSelf='flex-end'/>
        <Heading 
          fontWeight='extrabold' 
          size='2xl' 
          bgGradient='linear(to-r, #210535, #c874b2, #7b337d)' 
          bgClip='text'
        >
          ToDo Application
        </Heading>
        <TodoList />
        <AddToDo />
      </VStack>
    </div>
  );
}

export default App;
