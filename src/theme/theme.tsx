import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  styles: {
    global: (props) => ({
      'html, body': {
        fontSize: 'sm',
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        padding: 0,
        margin: 0,
      },
      a: {
        color: props.colorMode === 'dark' ? 'white' : 'gray.600',
        textDecoration: 'none',
      },
    }),
  },
})
