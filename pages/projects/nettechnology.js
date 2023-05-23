import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/layout';
  
  const Work = () => (
    <Layout title="Net Technology">
      <Container maxW="container.lg">
        <Title>
          Net Technology
        </Title>
        <P>
            Net Technology (KW2) redesigned the front end of NET and handed over design files for template adjustments.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.nettechnology.com/">
              https://www.nettechnology.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Design</Meta>
            <span>Invision, Sketch</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Silverstripe, NodeJS, Bootstrap 5, Javascript</span>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/nettechnology_screencapture.png" alt="NetTechnology Homepage Screen Capture" />
      </Container>
    </Layout>
  )
  
  export default Work