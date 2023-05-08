import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from '@react95/core'
import { Layout } from './components/layout.tsx'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import './global.css'
import '@react95/icons/icons.css'

const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: 'gray.400',
                color: '#f88702',
            },
            // styles for the `a`
            a: {
                color: 'teal.500',
                _hover: {
                    textDecoration: 'underline',
                },
            },
        },
    },
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ChakraProvider theme={theme}>
        <ThemeProvider theme="modernDark">
            <Layout>
                <App />
            </Layout>
        </ThemeProvider>
    </ChakraProvider>
)
