import Logo from './logo';
import NextLink from 'next/link';
import { forwardRef } from 'react'
import { Container, Box, Link, Stack, Heading, Flex, Menu, MenuItem, MenuList, MenuButton, 
    IconButton, useColorModeValue } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import ThemeToggleButton from './theme-toggle';

const LinkItem=({ href, path, target, children, ...props}) => {
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'gray.200')
    
    return(
        <Link
            as={NextLink}
            href={href}
            scroll={false}
            p={2}
            bg={active ? 'grassTeal' : undefined}
            color={active ? 'teal' : inactiveColor}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

const MenuLink = forwardRef((props, ref) => (
    <Link ref={ref} as={NextLink} {...props} />
))
  
const Navbar = props => {
    const {path} = props
    return(
        <Box position="fixed" as="nav" w="100%" bg={useColorModeValue('#f0e7db', '#20202380')} style={{backdropFilter:'blur(10px)'}} zIndex={1} {...props}>
            <Container display="flex" p={2} maxW="container.lg" wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tight'}>
                        <Logo />
                    </Heading>
                </Flex>

                <Stack direction={{ base: 'column', md:'row'}} display={{base: 'none', md:'flex'}} width={{base: 'full', md:'auto'}} alignItems="center" flexGrow={1} mt={{base: 4, nmd: 0}}>
                    <LinkItem href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem href="/Ledezma_Resume.pdf" path={path} target="_blank">
                        Resume
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{base: 'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Navigation Button"></MenuButton>
                            <MenuList>
                                <MenuItem as={MenuLink} href="/">Home</MenuItem>
                                <MenuItem as={MenuLink} href="/projects">Projects</MenuItem>
                                <MenuItem as={MenuLink} href="/Ledezma_Resume.pdf" target="_blank">Resume</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Navbar