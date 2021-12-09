import {Container, HStack, Input, Button} from '@chakra-ui/react'
import {useState} from 'react'
import {nanoid} from 'nanoid'


const AddToDo = ({addIngredient}) => {


    const [content, setContent] = useState('')
    const [amount, setAmount] = useState('')

    const handleSubmit = (e) => {
            e.preventDefault();
            const ingredient = {
                id: nanoid(),
                body: content,
                amt: amount
            }
            addIngredient(ingredient)
            console.log(ingredient)
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
                    <Button colorScheme="orange" px={8} type="submit">Add Item</Button>
                </HStack>
            </Container>
        </form>
    )
}

export default AddToDo
