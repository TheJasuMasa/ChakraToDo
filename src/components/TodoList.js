import {VStack, HStack, Text, IconButton, StackDivider} from '@chakra-ui/react'
import {FaTrash} from 'react-icons/fa';

const TodoList = () => {
    const items =[
        {
            id: 1,
            body: 'get bread',
        },
        {
            id: 2,
            body: 'get butter',
        },
    ];

    return (
        <VStack
            divider={<StackDivider />}
            borderColor='gray.100'
            borderWidth='2px'
            padding={4}
            borderRadius ='lg'
        >
            {items.map(item => (
               <HStack key ={item.id}>
                   <Text>{item.body}</Text>
                   <IconButton icon={<FaTrash />} isRound={true} />
               </HStack> 
            ))}
        </VStack>
    )
}

export default TodoList
