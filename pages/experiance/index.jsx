import Image from "next/image";
import { AboutBorder } from "../about/style";
import { NameLabel } from "../main_page/style";
import { CompanyImage, Content, Date, ExperianceContainer, Href, ImageContainer, JobContainer, JobContent, JobDescription, JobTitle, ListContent, SocialContainer } from "./style";
import Techno from "./techno";
import Dinffo from "../../public/DINFFO.webp"

export default function Experiance() {

    const ImageButton = (URL) => {
        window.open(URL, '_blank');
    }

    const arr = [
        {
            src: 'https://media.licdn.com/dms/image/D4E0BAQG0op6GSZa1PQ/company-logo_200_200/0/1694246235698?e=1703116800&v=beta&t=_PXhiAd3N1GMGULUmjhkPaJsyxBX77pS6XRxTsylCQo',
            jobtitle: 'Software Engineer - Full-Time',
            href: 'https://optimumpartners.co/',
            date: 'Jun 2021 - Jun 2023',
            name: 'Optimum Partners',
            content: 'Outsourced for US-based Hearst Media Monetization – Ad Product and Tech team.',
            bulletpoints: [
                'Developed web applications using NextJS and React, leveraging powerful features to build responsive, interactive user interfaces with GraphQL on the server side.',
                'Proficient in testing React components and application functionality using tools like Jest and React Testing Library.',
                'Implemented responsive web applications that deliver seamless user experiences across devices and screen sizes.',
                'Set up CI/CD pipelines using tools like GitHub Actions to automate the build, test, and deployment process.',
                'Ensured websites adhered to WCAG guidelines, making them accessible to a wide range of users, including those with disabilities.',
                'Developed server-side applications, using the asynchronous, event-driven architecture of NodeJS to build scalable, high-performance web services and APIs. Applied frameworks like ExpressJS to streamline development and enhance code organization.',
                'Collaborated with international teams, demonstrating strong communication and adaptability skills to work across time zones and cultural differences in a diverse, distributed team environment.'
            
            ]
        },
        {
            src: Dinffo.src,
            jobtitle: 'Full-Stack Developer - Full-Time',
            href: 'https://www.dinffo.com/',
            date: 'Mar 2020 - Jun 2021',
            name: 'DINFFO',
            content: 'Outsourced for US-based Hearst Media Monetization – Ad Product and Tech team.',
            bulletpoints: [
                'Proficient in building modern web applications with React, strong understanding of React.JS component-based architecture and virtual DOM.',
                'Skilled in designing data models, creating, and managing collections, performing CRUD operations, and implementing data validation and indexing for optimized query performance using MongoDB.',
                'Built efficient backend systems using NodeJS. Developed RESTful APIs, implemented authentication and authorization, and integrated with third-party services.',
                'Worked with CSS preprocessors like SASS and LESS to write clean, maintainable, and modular CSS code.',
                'Implemented state management using Redux for complex data flows and application-wide state.'
            ]
        },

    ]

    return (
        <ExperianceContainer id="experiance">
            <AboutBorder>
                <NameLabel style={{ color: '#333333' }}>
                    Experiances
                </NameLabel>
                {arr.map((elm, index) => {
                    return (
                        <div key={index}>
                            <JobContainer >
                                <ImageContainer>
                                    <CompanyImage src={elm.src}/>
                                    <JobDescription>
                                        <JobTitle>
                                            {elm.jobtitle}
                                        </JobTitle>
                                        <Href target="_blank" href={elm.href}>{elm.name}</Href>
                                    </JobDescription>

                                </ImageContainer>
                                <Date>
                                    {elm.date}
                                </Date>
                            </JobContainer>
                            <Content>
                                {elm.content}
                                <ul style={{marginTop: '1rem'}}>
                                    {elm.bulletpoints.map((point, index) => {
                                        return (
                                            <li key={index}>
                                                    {point}
                                            </li>
                                        )
                                    })                            
                                    }
                                </ul>
                            </Content>

                            <br />
                        </div>
                    );
                })}
                <Techno />

                <NameLabel style={{ color: '#333333' }}>
                    Social Netwrok
                </NameLabel>
                <SocialContainer>
                    <CompanyImage src={"/linkedin.png"}  onClick={() => ImageButton("https://www.linkedin.com/in/omar-assaf97")} style={{ cursor: 'pointer'}}/>
                    <CompanyImage src={"/github.png"} onClick={() => ImageButton("https://github.com/Omar-H-Assaf")} style={{ cursor: 'pointer' }} />
                </SocialContainer>
                <NameLabel style={{ color: '#333333' }}>
                    Languages
                </NameLabel>
                <SocialContainer>
                    <CompanyImage src={"/united-kingdom.png"} />
                    <CompanyImage src={"/united-arab.png"} />
                </SocialContainer>
            </AboutBorder>

        </ExperianceContainer>
    )
}