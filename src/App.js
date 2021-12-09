import {Heading, Container} from '@chakra-ui/react'
import TodoList from './components/TodoList'
import AddToDo from './components/AddToDo'
import {VStack, IconButton, Image, Box,HStack} from '@chakra-ui/react'
import {FaSun,FaMoon} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import {default as chef} from './img/chef.svg'
import StepList from './components/StepList'

function App() {
  const initialIngredients =[
    {
      id: 1,
      body: 'English Muffin(Rye)',
      amt: '1'
    },
    {
      id: 2,
      body: 'Egg',
      amt: '1'
    },
    {
      id: 3,
      body: 'Bacon',
      amt: '4 half-slices'
    },
    {
      id: 4,
      body: 'Cheese',
      amt: '1 slice'
    },
    {
      id: 5,
      body: 'Pepper',
      amt: '2 pinches'
    },
    {
      id: 6,
      body: 'Butter',
      amt: '1 tsp'
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

const addIngredient = (ingredient) =>{
  setIngredients([...ingredients, ingredient])
}

  return (
    <div className="App">
      <VStack p={4}>
        <IconButton 
        icon={<FaSun/>} 
        isRound={true} 
        size='lg' 
        alignSelf='flex-end'
        />
        <Container centerContent>
          <VStack mb={16}>
            <Box maxWidth={'300px'}>
              <Image
                src={chef}
              />
            </Box>
            <Heading 
              centerContent
              marginBottom={8}
              marginRight={8}
              fontWeight='extrabold' 
              size='2xl' 
              color = 'orange.500' 
              textShadow='4px 4px #00008B'
            >
              Justin & Kana's Cooking Journal
            </Heading>
          </VStack>
        </Container>
        <Heading
          mx={8}
          fontWeight='extrabold' 
          size='xl' 
          color = 'orange.400'
        >
          Egg McJustin:
        </Heading>
        <TodoList 
          ingredients={ingredients} 
          deleteIngredient={deleteIngredient} 
        />
        <AddToDo addIngredient ={addIngredient}/>
        <StepList />
      </VStack>
    </div>
  );
}

export default App;
