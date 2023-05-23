import { Container, Link, List, ListItem, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/layout';
  
  const Work = () => (
    <Layout title="Sargento Foods">
      <Container maxW="container.lg">
        <Title>
          Sargento
        </Title>
        <P>
            A variety of website refresh updates added including addition of Hispanic landing pages and toggle translation, navigation & updating menu organization on the existing website into Mega Navigation,
            Blog redesign, Tiktok video integration on Hispanic Landing page.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.sargentofoods.com/">
              https:/www.sargentofoods.com/ <ExternalLinkIcon mx="2px" />
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
            <span>Silverstripe, NodeJS, Bootstrap 4, Javascript, Gulp</span>
          </ListItem>
          <Divider mt={5} mb={4} />
          <ListItem>
            <Meta>Custom Features</Meta>
            <div>Mega Menu Navigation</div>
            <div>Hamburger Mobile Nav module</div>
            <div>Tiktok Integration</div>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/sargento_latincuisinepage.png" alt="Sargento Latin Cuisine Page Screen Capture" />
        <ProjectImage src="/images/projects/sargento_megamenu.png" alt="Sargento MegaMenu Screenshot" />
        <ProjectImage src="/images/projects/sargento_mobilemegamenu.png" alt="Sargento Mobile Hamburger Menu Screenshot" />
        <ProjectImage src="/images/projects/sargento_blogpage.png" alt="Sargento Blog Page Screenshot" />
      </Container>
    </Layout>
  )
  
  export default Work