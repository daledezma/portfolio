import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/layout';
  
  const Work = () => (
    <Layout title="Toilet Seats">
      <Container maxW="container.lg">
        <Title>
          Toiletseats.com
        </Title>
        <P>

        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.toiletseats.com/">
              https://www.toiletseats.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Design</Meta>
            <span>Adobe Photoshop</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Silverstripe, NodeJS, Bootstrap 4, Gulp, Javascript</span>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/toiletseats_gpp.png" alt="Toilet Seats Good Better Best page" />
        <ProjectImage src="/images/projects/toiletseats_pdp.png" alt="Toilet Seats Product Detail page" />
      </Container>
    </Layout>
  )
  
  export default Work