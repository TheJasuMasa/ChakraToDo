// import {VStack, Textarea, Heading, Spacer, HStack} from '@chakra-ui/react'

// const AddStep = () => {

//     const getSmallestStep = (items) =>{
//         items.forEach(item => {
//             let minValue
//             let minStep
//             if(item.step < minValue){
//                 minValue = item.step
//                 minStep = item
//             }
//         })
//         return [minValue, minStep]
//     }

    

//     const [steps, setSteps] = useState(initialSteps)

//     return (
//         <VStack>
//              <Heading
//                 fontWeight='extrabold' 
//                 size='m' 
//                 color = 'orange.600'
//             >Steps</Heading>
//             {steps.map((step) => (
//                <HStack key ={step.id}>
//                    <Text>{step.body}</Text>
//                    <Spacer />
//                    <IconButton icon={<FaTrash />} isRound={true} onClick={()=>deleteIngredient(ingredient.id)}/>
//                </HStack> 
//             ))}
//         </VStack>
//     )
// }

// export default AddStep
