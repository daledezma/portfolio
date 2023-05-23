import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/layout';
  
  const Work = () => (
    <Layout title="Healhty Sheboygan County">
      <Container maxW="container.lg">
        <Title>
          Healthy Sheboygan County
        </Title>
        <P>
            Full Website Rebuild
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.healthysheboygancounty.org/">
              https://www.healthysheboygancounty.org/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Design</Meta>
            <span>AdobeXD</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Silverstripe, NodeJS, Bootstrap 5, Webpack</span>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/healthysheboygan_screencapture.png" alt="Healthy Sheboygan County Homepage Screen Capture" />
      </Container>
    </Layout>
  )
  
  export default Work