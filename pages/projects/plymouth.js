import { Container, Link, List, ListItem } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/layout';
  
  const Work = () => (
    <Layout title="Plymouth Chamber of Commerce">
      <Container maxW="container.lg">
        <Title>
          Plymouth Chamber of Commerce
        </Title>
        <P>
        The Plymouth County Chamber of Commerce requested a redesign of the current website, plymouthwisconsin.com.				
        Website Redesign includes a clean and responsive design, a sleek CMS, and inviting content. CC Assist, a Association Management Software (AMS) package, integrated with the site. 
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.plymouthwisconsin.com/">
              https://www.plymouthwisconsin.com/ <ExternalLinkIcon mx="2px" />
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
            <span>Silverstripe, NodeJS, Bootstrap 5, Webpack, Javascript, Splide.js</span>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/plymouth_screencapture.png" alt="Plymouth Homepage Screen Capture" />
      </Container>
    </Layout>
  )
  
  export default Work