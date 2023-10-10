import { Box, Button, Grid, GridItem, Heading } from '@chakra-ui/react'
import './App.css'
import { useState } from 'react'

const App = (): JSX.Element => {
	const [state, setState] = useState(0)
	const handleOnchange = (e: any) => {
		e.target.innerText === 'AC'
			? setState(0)
			: setState(state + e.target.innerText)
		//console.log(e.target.innerText)
	}

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
				<label className='cal_label'>{state}</label>
				<Box
					p={'1,5rem'}
					//outline={'red solid 1px'}
					width={'80%'}
					h={'80%'}
					margin={'0 auto'}
					borderRadius={'10px'}
				>
					<Grid
						h={'100%'}
						p={'1rem 0'}
						templateRows='repeat(5, 1fr)'
						templateColumns='repeat(4, 1fr)'
						gap={2}
					>
						<GridItem rowSpan={1}>
							<Button
								colorScheme='orange'
								h={'100%'}
								w={'100%'}
								onClick={e => handleOnchange(e)}
							>
								AC
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button colorScheme='orange' h={'100%'} w={'100%'}>
								CE
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button colorScheme='teal' h={'100%'} w={'100%'}>
								%
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button colorScheme='teal' h={'100%'} w={'100%'}>
								/
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button
								colorScheme='teal'
								h={'100%'}
								w={'100%'}
								onClick={e => handleOnchange(e)}
							>
								7
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button
								colorScheme='teal'
								h={'100%'}
								w={'100%'}
								onClick={e => handleOnchange(e)}
							>
								8
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button
								colorScheme='teal'
								h={'100%'}
								w={'100%'}
								onClick={e => handleOnchange(e)}
							>
								9
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button colorScheme='teal' h={'100%'} w={'100%'}>
								x
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button
								colorScheme='teal'
								h={'100%'}
								w={'100%'}
								onClick={e => handleOnchange(e)}
							>
								4
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button
								colorScheme='teal'
								h={'100%'}
								w={'100%'}
								onClick={e => handleOnchange(e)}
							>
								5
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button
								colorScheme='teal'
								h={'100%'}
								w={'100%'}
								onClick={e => handleOnchange(e)}
							>
								6
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button colorScheme='teal' h={'100%'} w={'100%'}>
								-
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button
								colorScheme='teal'
								h={'100%'}
								w={'100%'}
								onClick={e => handleOnchange(e)}
							>
								1
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button
								colorScheme='teal'
								h={'100%'}
								w={'100%'}
								onClick={e => handleOnchange(e)}
							>
								2
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button
								colorScheme='teal'
								h={'100%'}
								w={'100%'}
								onClick={e => handleOnchange(e)}
							>
								3
							</Button>
						</GridItem>
						<GridItem rowSpan={2}>
							<Button colorScheme='teal' h={'100%'} w={'100%'}>
								+
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button
								colorScheme='teal'
								h={'100%'}
								w={'100%'}
								onClick={e => handleOnchange(e)}
							>
								0
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button colorScheme='teal' h={'100%'} w={'100%'}>
								.
							</Button>
						</GridItem>
						<GridItem rowSpan={1}>
							<Button colorScheme='teal' h={'100%'} w={'100%'}>
								=
							</Button>
						</GridItem>
					</Grid>
				</Box>
			</Box>
		</Box>
	)
}

export default App
