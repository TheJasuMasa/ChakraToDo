import {Heading, Container} from '@chakra-ui/react'
import TodoList from './components/TodoList'
import AddToDo from './components/AddToDo'
import {VStack, IconButton} from '@chakra-ui/react'
import {FaSun,FaMoon} from 'react-icons/fa'
import {useState, useEffect} from 'react'

function App() {
  const initialIngredients =[
    {
        id: 1,
        body: 'get bread',
        amt: '1'
    },
    {
        id: 2,
        body: 'get butter',
        amt: '1'
    },
    {
      id: 3,
      body: 'onion',
      amt: '3'
  },
];

const [ingredients, setIngredients] = useState(initialIngredients)

const deleteIngredient = (id) => {
  const newIngredients = ingredients.filter(ingredient => {
    return ingredient.id !== id
  })
  console.log(newIngredients)
  setIngredients(newIngredients)
}

  return (
    <div className="App">
      <VStack p={4}>
        <IconButton icon={<FaSun/>} isRound={true} size='lg' alignSelf='flex-end'/>
        <Container centerContent>
          <Heading 
            marginBottom={8}
            fontWeight='extrabold' 
            size='2xl' 
            bgGradient='linear(to-r, #210535, #c874b2, #7b337d)' 
            bgClip='text'
          >
            ToDo Application
          </Heading>
        </Container>
        <TodoList ingredients={ingredients} deleteIngredient={deleteIngredient} />
        <AddToDo />
      </VStack>
    </div>
  );
}

export default App;
