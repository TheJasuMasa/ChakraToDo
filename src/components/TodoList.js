import {VStack, HStack, Text, IconButton, StackDivider, Spacer} from '@chakra-ui/react'
import {FaTrash} from 'react-icons/fa';

const TodoList = ({ingredients, deleteIngredient}) => {

    return (
        <VStack
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='2px'
            padding={4}
            borderRadius ='lg'
            w='100%'
            maxW={{base: '90vw', sm: '80vw', lg: '50w', xl:'40vw'}}
            alignItems ='stretch'
        >
            {ingredients.map((ingredient) => (
               <HStack key ={ingredient.id}>
                   <Text>{ingredient.body}</Text>
                   <Text marginLeft={3}>{ingredient.amt}</Text>
                   <Spacer />
                   <IconButton icon={<FaTrash />} isRound={true} onClick={()=>deleteIngredient(ingredient.id)}/>
               </HStack> 
            ))}
        </VStack>
    )
}

export default TodoList
