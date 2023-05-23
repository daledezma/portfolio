import { Container, Box, Heading, Image, Link, Tooltip, Button, useColorModeValue, List, ListItem } from "@chakra-ui/react";
import Area from "../components/area";
import Paragraph from "../components/paragraph";
import NextLink from 'next/link'
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/layout";
import { IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";

const Page = () => {
    return (
        <Layout>
            <Container maxW="container.lg">
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.300')} p={3} align="center">
                    Hello! My name is Daniel Ledezma.
                </Box>
                <Box display={{md: 'flex'}} justifyContent="center" alignItems="center">
                    <Box pt={4} pb={4}>
                        <Heading as="h1" variant="page-title">
                            Daniel Ledezma
                        </Heading>
                        <p>Front-End Web Developer</p>
                    </Box>
                    <Box mt={{ base:4, lg: 4 }} ml={{ md:6 }} align="center">
                        <Image borderColor="whiteAlpha.900" borderWidth={3} borderStyle="solid" maxWidth="120px" display="inline-block" borderRadius="full" 
                        src="/images/headshot.jpeg" alt="My Profile picture"/>
                    </Box>
                </Box> 

                <Area delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        About Me
                    </Heading>
                    <Paragraph>
                        My name is Daniel Ledezma and currently I live in Milwaukee working as the Lead Frontend Developer
                        at {''}
                        <Link as={NextLink} href="https://www.dynamicagency.com/" passHref scroll={false} target="_blank">
                            Dynamic Agency
                        </Link>
                        . I am an avid <Tooltip display={{ lg: 'flex'}} label='A user of the Internet, especially a habitual or skilled one.'><Button maxHeight="20px" >Internaut</Button></Tooltip> specializing in transforming ideas into exceptional digital experiences.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <Link as={NextLink} href="/projects" >
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                            My Projects
                            </Button>
                        </Link>
                    </Box>
                </Area>

                <Area delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Things I  ♥
                    </Heading>
                    <Paragraph> Horror Movies, Powerlifting, {' '}
                    <Link href="https://importperformancerepair.com/" target="_blank">
                        Cars
                    </Link>
                    , Photography
                    </Paragraph>
                </Area>

                <Area delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        My Socials
                    </Heading>
                    <List>
                        <ListItem>
                            <Link href="https://github.com/daledezma" target="_blank">
                            <Button
                            variant="ghost"
                            colorScheme="teal"
                            leftIcon={<IoLogoGithub />}
                             >
                                Github
                            </Button>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.linkedin.com/in/daniel-ledezma-64303b19b/" target="_blank">
                                <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoLinkedin />}
                                >
                                LinkedIn
                                </Button>
                            </Link>
                        </ListItem>
                    </List>
                </Area>
            </Container>
        </Layout>
    ) 
}

export default Page