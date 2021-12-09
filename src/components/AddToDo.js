import {HStack, Input, Button} from '@chakra-ui/react'

const AddToDo = () => {
    
    const handleSubmit = (e) => {
            
    }
    return (
        <form onSubmit = {handleSubmit}>
            <HStack mt={4}>
                <Input variant='filled'placeholder='Add an item'/>
                <Input variant='filled'placeholder='Amount' maxWidth='100px'/>
                <Button colorScheme="orange" px={8} type="submit">Add Item</Button>
            </HStack>
        </form>
    )
}

export default AddToDo
