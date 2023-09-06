// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
	brand: {
		primary: '#e2e2e2',
		secondary: '#5d5d5d',
		terciario: '#f1783f',
	},
}

export const theme = extendTheme({ colors })
