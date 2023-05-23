import Head from 'next/head'
import Navbar from '../navbar';
import { Box, Container } from '@chakra-ui/react'
import Astronaut from '../astronaut';

const Main = ({ children, router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Daniel Ledezma's Portfolio Site</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.lg" pt={14}>
                <Astronaut />
                {children}
            </Container>
        </Box>
    )
}

export default Main