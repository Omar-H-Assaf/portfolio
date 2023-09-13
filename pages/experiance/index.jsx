import { ContentLabel, NameLabel } from "../main_page/style";
import { ExperianceContainer, Href, JobContainer, JobContent, JobTitle, ListContent } from "./style";

export default function Experiance() {
    return (
        <ExperianceContainer id="experiance">
            <NameLabel>
                My Experiance
            </NameLabel>
            <div style={{paddingLeft: '2rem'}}>
            <JobContainer>
                <JobTitle>
                    Software Engineer
                </JobTitle>
                &nbsp;
                at &nbsp;
                <Href target="_blank" href='https://optimumpartners.co/'>Optimum Partners</Href>
                &nbsp;
                2021-2023
            </JobContainer>
            <ContentLabel>
                Outsourced for US-based <Href target="_blank" href='https://www.hearst.com/'>Hearst Media</Href> Monetization – Ad Product and Tech team.
            </ContentLabel>
            <JobContent>
                <ListContent>
                    Developed web applications using NextJS and React, leveraging powerful features to build responsive, interactive user interfaces with GraphQL on the server side.
                </ListContent>
                <ListContent>
                    Integrated ad platforms, such as Google AdSense and custom ads, into web applications. Set up Google Analytics to track user behavior and measure key metrics for data-driven decision-making.
                </ListContent>
                <ListContent>
                   Implemented responsive web applications that deliver seamless user experiences across devices and screen sizes.
                </ListContent>
                <ListContent>
                    Familiar with setting up CI/CD pipelines using tools like GitHub Actions to automate the build, test, and deployment process.
                </ListContent>
                <ListContent>
                    Integrated pipelines with version control systems and deployed applications seamlessly.
                </ListContent>
                <ListContent>
                    Developed server-side applications, using the asynchronous, event-driven architecture of NodeJS to build scalable, high-performance web services and APIs. Applied frameworks like ExpressJS to streamline development and enhance code organization.
                </ListContent>
                <ListContent>
                    Collaborated with international teams, demonstrating strong communication and adaptability skills to work across time zones and cultural differences in a diverse, distributed team environment.
                </ListContent>
            </JobContent>
            <JobContainer style={{paddingTop: '4rem'}}>
                <JobTitle>
                    Full Stack Developer
                </JobTitle>
                &nbsp;
                at &nbsp;
                <Href target="_blank" href='https://www.dinffo.com/'>DINFFO</Href>
                &nbsp;
                2020-2021
            </JobContainer>
            <ContentLabel>
                Created a web application that allows patients to book appointments with doctors in Jordan, and doctors to manage appointments, clinic, and staff.
            </ContentLabel>
            <JobContent>
                <ListContent>
                    Developed web applications using NextJS and React, leveraging powerful features to build responsive, interactive user interfaces with GraphQL on the server side.
                </ListContent>
                <ListContent>
                    Integrated ad platforms, such as Google AdSense and custom ads, into web applications. Set up Google Analytics to track user behavior and measure key metrics for data-driven decision-making.
                </ListContent>
                <ListContent>
                    Implemented responsive web applications that deliver seamless user experiences across devices and screen sizes.
                </ListContent>
                <ListContent>
                    Familiar with setting up CI/CD pipelines using tools like GitHub Actions to automate the build, test, and deployment process.
                </ListContent>
                <ListContent>
                    Integrated pipelines with version control systems and deployed applications seamlessly.
                </ListContent>
                <ListContent>
                    Developed server-side applications, using the asynchronous, event-driven architecture of NodeJS to build scalable, high-performance web services and APIs. Applied frameworks like ExpressJS to streamline development and enhance code organization.
                </ListContent>
                <ListContent>
                    Collaborated with international teams, demonstrating strong communication and adaptability skills to work across time zones and cultural differences in a diverse, distributed team environment.
                </ListContent>
            </JobContent>
            </div>
        </ExperianceContainer>
    )
}