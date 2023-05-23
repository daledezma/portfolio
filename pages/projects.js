import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Area from '../components/area';
import { ProjectGridItem } from '../components/grid-item';
import Layout from "../components/layouts/layout";

import thumbAscendium from '../public/images/projects/ascendium_logo.png';
import thumbSomeplacebetter from '../public/images/projects/someplacebetter_logo.png';
import thumbSargento from '../public/images/projects/sargento_logo.png';
import thumbLakeshore from '../public/images/projects/lakeshore_logo.png';
import thumbPlymouth from '../public/images/projects/plymouth_logo.png';
import thumbCraftbev from '../public/images/projects/craftbev_steps.png';
import thumbBerkeley from '../public/images/projects/berkeley_logo.png';
import thumbHealthySheboygan from '../public/images/projects/healthysheboygan_logo.png';
import thumbNET from '../public/images/projects/net_logo.png';
import thumbToiletseats from '../public/images/projects/toiletseats_grid.png';
import thumbWTCS from '../public/images/projects/wtcs_logo.png';

const Projects = () => {
    return(
        <Layout>
            <Container maxW="container.lg">
                <Heading as="h3" fontSize={20} mb={4}>
                    Projects
                </Heading>
                <SimpleGrid columns={[1,2,3]} gap={5} alignItems="baseline">
                    <Area>
                        <ProjectGridItem id="ascendium" title="Ascendium" thumbnail={thumbAscendium}>
                            Ascendium Education Group is the nation&apos;s largest federal student loan guarantor, a leading postsecondary education philanthropy and a provider of student success services for postsecondary institutions.
                        </ProjectGridItem>
                    </Area>
                    <Area>
                        <ProjectGridItem id="someplacebetter" title="Someplace Better" thumbnail={thumbSomeplacebetter}>
                            Newly created Sheboygan County website which goes into detail about the many positive aspects of life in Sheboygan County — businesses and job openings, schools, parks, neighborhoods and housing, health care, shopping, arts and culture and much more.
                        </ProjectGridItem>
                    </Area>
                    <Area>
                        <ProjectGridItem id="sargento" title="Sargento Foods" thumbnail={thumbSargento}>
                            Sargento Foods Inc. is an American food producer best known for its cheese.
                        </ProjectGridItem>
                    </Area>
                    <Area delay={0.2}>
                        <ProjectGridItem id="lakeshore" title="Lakeshore Technical College" thumbnail={thumbLakeshore}>
                            Lakeshore Technical College (LTC) is a public community college in Cleveland, Wisconsin and is part of the Wisconsin Technical College System. 
                        </ProjectGridItem>
                    </Area>
                    <Area delay={0.2}>
                        <ProjectGridItem id="berkeley" title="Berekley Lab Computing Sciences" thumbnail={thumbBerkeley}>
                            The Berkeley Lab&apos;s Computing Sciences was created to advance computational science throughout the U.S. Department of Energy&apos;s Office of Science research programs
                        </ProjectGridItem>
                    </Area>
                    <Area delay={0.2}>
                        <ProjectGridItem id="toiletseats" title="Toiletseats.com" thumbnail={thumbToiletseats}>
                            Bemis Manufacturing&apos;s site to view it&apos;s large selection of toilet seats and shop by toilet seat shapes, features and colors.
                        </ProjectGridItem>
                    </Area>
                    <Area delay={0.3}>
                        <ProjectGridItem id="nettechnology" title="Network Engineering Technologies" thumbnail={thumbNET}>
                            NET is your leading edge technology services company, serving North America&apos;s top companies, including Fortune 500 organizations and the world&apos;s largest superstore.
                        </ProjectGridItem>
                    </Area>
                    <Area delay={0.3}>
                        <ProjectGridItem id="wtcs" title="Wisconsin Technical College System" thumbnail={thumbWTCS}>
                            The Wisconsin Technical College System offers more than 500 associate degree, technical diploma and short-term certificate options. The System is also a major provider of customized instruction and technical assistance for Wisconsin employers.
                        </ProjectGridItem>
                    </Area>
                    <Area delay={0.3}>
                        <ProjectGridItem id="plymouth" title="Plymouth Chamber of Commerce" thumbnail={thumbPlymouth}>
                            The Plymouth Chamber of Commerce needed a website created for a dual purpose for them, providing tourism informa1on for Plymouth and for serving for their Chamber members.
                        </ProjectGridItem>
                    </Area>
                    <Area delay={0.4}>
                        <ProjectGridItem id="craftbev" title="Craft Beverage Warehouse" thumbnail={thumbCraftbev}>
                            Craft Beverage Warehouse offers direct-to-beverage can digital printing and related wholesale packaging materials.
                        </ProjectGridItem>
                    </Area>
                    <Area delay={0.4}>
                        <ProjectGridItem id="healthysheboygan" title="Healthy Sheboygan County" thumbnail={thumbHealthySheboygan}>
                            Healthy Sheboygan County is working to improve the health of the people of Sheboygan County, leading to a community with &quot;Everyone Living Better, Longer.&quot;
                        </ProjectGridItem>
                    </Area>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Projects