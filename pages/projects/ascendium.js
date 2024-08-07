import { Container, Link, List, ListItem, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/layout';
  
  const Work = () => (
    <Layout title="Ascendium Education">
      <Container maxW="container.lg">
        <Title>
          Ascendium Education Group 
        </Title>
        <P>
        The Ascendium Education team wanted to move their Corporate site out of the HubSpot platform and into Silverstripe.<br />
        Consulted with Ascendium on the Information Architecture (IA) to help assess what page types and content will be most beneficial to the new Silverstripe site. <br />
        Migrated website content into Silverstripe along with configuring server and hosting.  <br />
        Developed new page types in Silverstripe based design files and copy provided by Ascendium.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.ascendiumeducation.org/">
              https://www.ascendiumeducation.org/ <ExternalLinkIcon mx="2px" />
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
            <span>Silverstripe, NodeJS, Bootstrap 5, Javascript</span>
          </ListItem>
          <Divider mt={5} mb={4} />
          <ListItem>
            <Meta>Custom Features</Meta>
            <div>Mega Menu</div>
            <div>Content Carousel module</div>
            <div>Vertical scrolling timeline</div>
            <div>Automated Social Share</div>
            <div>AddSearch Installation</div>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/ascendium_screencapture.png" alt="Ascendium Education Homepage Screen Capture" />
      </Container>
    </Layout>
  )
  
  export default Work