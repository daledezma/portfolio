import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/layout';
  
  const Work = () => (
    <Layout title="Berkeley Lab">
      <Container maxW="container.lg">
        <Title>
            Lawrence Berkeley National Laboratory
        </Title>
        <P>
            Lawrence Berkeley National Laboratory discussed  the need for content strategy, front end updates (BLDS) and blocks development for https://cs.lbl.gov/. Silverstripe
            4 upgrade completed requiring database and asset transfers, DNS updates, general technical oversight for cutover.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.cs.lbl.gov/">
              https://www.cs.lbl.gov/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS/Linux/iOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Design</Meta>
            <span>Adobe Photoshop, Storybook</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Silverstripe, NodeJS, Bootstrap 5</span>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/berkeley_screencapture.png" alt="Berkeley Homepage Screen Capture" />
      </Container>
    </Layout>
  )
  
  export default Work