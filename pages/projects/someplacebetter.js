import { Container, Link, List, ListItem, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/layout';
  
  const Work = () => (
    <Layout title="Someplace Better">
      <Container maxW="container.lg">
        <Title>
          Someplace Better
        </Title>
        <P>
        Developed newly rebranded website to support talent decision making in the relocation process by inspiring a sense of belonging in Sheboygan County.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.someplacebetter.org/">
              https://www.someplacebetter.org/ <ExternalLinkIcon mx="2px" />
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
            <span>Silverstripe, NodeJS, Bootstrap 5, Gulp, Javascript</span>
          </ListItem>
          <Divider mt={5} mb={4} />
          <ListItem>
            <Meta>Custom Features</Meta>
            <div>Trailing Spouse database</div>
            <div>Living Comparisons page</div>
            <div>Talent Community signup portal</div>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/someplacebetter_screencapture.png" alt="Someplace Better Homepage Screen Capture" />
      </Container>
    </Layout>
  )
  
  export default Work