import { Container, Link, List, ListItem, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/layout';
  
  const Work = () => (
    <Layout title="Lakeshore Technical College">
      <Container maxW="container.lg">
        <Title>
            Lakeshore Technical College
        </Title>
        <P>
            Lakeshore Technical College (LTC) requested a web redesign project that entails review of the current web architecture and security, 
            as well as marketing and content requirements. Project highlights include President's blog/newsletter sign-up, Program pages being a printable flyer that is graphically inclined,
            improve UX experience on Career Pathways and Career Clusters pages.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.gotoltc.edu/">
              https://www.gotoltc.edu/ <ExternalLinkIcon mx="2px" />
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
            <span>Drupal, NodeJS, Bootstrap 4, Gulp</span>
          </ListItem>
          <Divider mt={5} mb={4} />
          <ListItem>
            <Meta>Custom Features</Meta>
            <div>Career Pathways</div>
            <div>President's Blog</div>
            <div>Newsletter Sign-up</div>
            <div>Career Clusters</div>
            <div>Google Translate Installation</div>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/lakeshore_screencapture.png" alt="Lakeshore Homepage Screen Capture" />
      </Container>
    </Layout>
  )
  
  export default Work