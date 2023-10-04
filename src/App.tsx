import { Box, Heading } from '@chakra-ui/react'
import './App.css'

function App() {
	return (
		<Box>
			<Heading textAlign={'center'} margin={'1rem auto'}>
				Calculadora TypeScript + Chakra UI
			</Heading>
			<Box
				w={'35%'}
				h={'85vh'}
				bg={'brand.secondary'}
				m={'auto'}
				borderRadius={'5%'}
				paddingTop={'1.5rem'}
			>
				<label className='cal_label'></label>
				<Box
					p={'1,5rem'}
					outline={'red solid 1px'}
					width={'80%'}
					h={'80%'}
					margin={'0 auto'}
					borderRadius={'10px'}
				>
					
				</Box>
			</Box>
		</Box>
	)
}

export default App
