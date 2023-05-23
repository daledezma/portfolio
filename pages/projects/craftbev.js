import { Container, Link, List, ListItem, Divider } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Title, ProjectImage, Meta } from '../../components/project';
import P from '../../components/paragraph';
import Layout from '../../components/layouts/layout';
  
  const Work = () => (
    <Layout title="Craft Beverage Warehouse">
      <Container maxW="container.lg">
        <Title>
          Craft Beverage Warehouse
        </Title>
        <P>

        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.craftbevwarehouse.com/">
              https://www.craftbevwarehouse.com/ <ExternalLinkIcon mx="2px" />
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
            <span>Silverstripe, NodeJS, Bootstrap 5, Three.js, WebGL</span>
          </ListItem>
          <Divider mt={5} mb={4} />
          <ListItem>
            <Meta>Custom Features</Meta>
            <div>Uploadable Artwork</div>
            <div>Artwork Approval process</div>
            <div>Rotatable 3D Can Model with uploadable Artwork view</div>
          </ListItem>
        </List>
  
        <ProjectImage src="/images/projects/craftbev_gif.gif" alt="CraftBeverage Warehosue Homepage Screen Capture" />
        <ProjectImage src="/images/projects/craftbev_upload.png" alt="CraftBeverage Upload Artwork Page" />
        <ProjectImage src="/images/projects/craftbev_manageartwork.png" alt="CraftBeverage Manage Artwork Page Design" />
      </Container>
    </Layout>
  )
  
  export default Work