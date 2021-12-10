import {Container, HStack, Input, Button, useToast} from '@chakra-ui/react'
import {useState} from 'react'
import {nanoid} from 'nanoid'


//Add ability to save on local storage (later to push to api '45:42' 'yoursTRULY')

const AddToDo = ({addIngredient}) => {

    const toast = useToast()

    const [content, setContent] = useState('')
    const [amount, setAmount] = useState('')

    const handleSubmit = (e) => {
            e.preventDefault();
            const ingredient = {
                id: nanoid(),
                body: content,
                amt: amount
            }
            if(!content){
               toast({
                   title: 'Item field empty',
                   status: 'error',
                   duration: 4000,
                   isClosable: true,
               }) ;
               return
            }

            if(!amount){
                toast({
                    title: 'Amount field empty',
                    status: 'error',
                    duration: 6000,
                    isClosable: true,
                }) ;
                return
             }
            
            addIngredient(ingredient)
            setContent('')
            setAmount('')

    }

    return (
        <form onSubmit = {handleSubmit}>
            <Container>
                <HStack my={8}>
                    <Input 
                        variant='filled'
                        placeholder='Add an item' 
                        value={content} 
                        onChange={(e)=>{
                            setContent(e.target.value)
                        }}
                    />
                    <Input 
                        variant='filled'
                        placeholder='Amount' 
                        maxWidth='100px ' 
                        value={amount}
                        onChange={(e) =>{
                            setAmount(e.target.value)
                        }}
                    />
                    <Button colorScheme="blue" px={8} type="submit">Add Item</Button>
                </HStack>
            </Container>
        </form>
    )
}

export default AddToDo
