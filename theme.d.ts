import { PaletteOptions } from '@mui/material/styles'

declare module '@mui/material' {
	interface PaletteOptions {
		customColors: {
			darkGray: string
			darkBrown: string
			lightGray: string
			lightBlue: string
			dirtyYellow: string
		}
	}
}
