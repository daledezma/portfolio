import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/layout';
  
  const Work = () => (
    <Layout title="WTCS">
      <Container maxW="container.lg">
        <Title>
          Wisconsin Technical College Systems
        </Title>
        <P>
            Code adjustments and updates created on KW2's wtcsystem.org site. Led project to transition Newsletter 'WTCS In Brief' from HubSpot to annative integration on site allowing for styled
            newsletters to be printed from the CMS. Integrated Google Translate on site.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.wtcsystem.edu/">
              https://www.wtcsystem.edu/ <ExternalLinkIcon mx="2px" />
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
            <span>Silverstripe, NodeJS, Bootstrap 4, Gulp</span>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/wtcs_screencapture.png" alt="WTCS Homepage Screen Capture" />
      </Container>
    </Layout>
  )
  
  export default Work