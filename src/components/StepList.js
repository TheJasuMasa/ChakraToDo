import {StackDivider, Container, VStack, Heading, Spacer, HStack, Text, IconButton} from '@chakra-ui/react'
import {FaTrash} from 'react-icons/fa';
import {useState} from 'react'

const StepList = () => {

    // const getSmallestStep = (items) =>{
    //     items.forEach(item => {
    //         let minValue
    //         let minStep
    //         if(item.step < minValue){
    //             minValue = item.step
    //             minStep = item
    //         }
    //     })
    //     return [minValue, minStep]
    // }

    const initialSteps = [
        {
            id:1,
            step:1,
            body:'Separate the English muffin, add cheese to the bottom and half of the butter to the top. Toast the muffin until the cheese is melted and the bread is golden and crusty.'
        },
        {
            id:2,
            step:2,
            body:'Evenly spread out the bacon on a frying pan and cook the bacon until crispy. Set the bacon aside for later when the sandwich is assembled.',
        },
        {
            id:3,
            step:3,
            body:'Lightly mix the egg in the bowl. The goal is to slightly break the yolk so that it mixes with the whites. On low to medium heat, melt the butter in the frying pan without wiping the bacon grease.',
        },
        {
            id:4,
            step:4,
            body:'On low to medium heat, add the egg to the frying pan. When the sides of the egg cook solidly, use a spatula to fold them inward to form a square. Add water to the frying pan and cover for about three minutes or until the top of the egg is cooked. Sprinkle pepper on the egg',
        },
        {
            id:5,
            step:5,
            body:`AssembleSandwich = (ingredients) => {
                [ingredients.bread.bottom + ingredients.cheese, ingredients.egg, ingredients.bacon, ingredients.bread.top]
            } `,
        },
    ]

    const [steps, setSteps] = useState(initialSteps)

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
            >
                Steps
            </Heading>
            {steps.map((step) => (
            <HStack key ={step.id}>
                <Heading
                fontWeight='extrabold'
                size='m'
                color = 'orange.400'
                p={4}
                >
                    {step.step}
                </Heading>
                <Text my={2}>{step.body}</Text>
                <Spacer />
                <IconButton icon={<FaTrash />} isRound={true}/>
            </HStack> 
            ))}
        </VStack>
    )
}

export default StepList
