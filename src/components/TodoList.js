import {Heading, VStack, HStack, Text, IconButton, StackDivider, Spacer, Badge} from '@chakra-ui/react'
import {FaTrash} from 'react-icons/fa';

const TodoList = ({ingredients, deleteIngredient}) => {

    if (!ingredients.length){
        return (
            <Badge colorScheme='yellow' padding={4} borderRadius={'lg'}>
                <Text>No ingredients added yet</Text>
            </Badge>
        )
    }

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
            <Heading
                fontWeight='extrabold' 
                size='m' 
                color = 'orange.600'
            >Ingredients</Heading>
            {ingredients.map((ingredient) => (
               <HStack key ={ingredient.id}>
                   <Text>{ingredient.body}</Text>
                   <Text marginLeft={3}>({ingredient.amt})</Text>
                   <Spacer />
                   <IconButton icon={<FaTrash />} isRound={true} onClick={()=>deleteIngredient(ingredient.id)}/>
               </HStack> 
            ))}
        </VStack>
    )
}

export default TodoList
