import Image from "next/image";
import { AboutBorder } from "../about/style";
import { HomeH1, Line, NameLabel, SpanDot, TitleContainer } from "../main_page/style";
import { CompanyImage, Content, Date, ExperianceContainer, Href, ImageContainer, JobContainer, JobContent, JobDescription, JobTitle, ListContent, SocialContainer } from "./style";
import Techno from "./techno";
import Dinffo from "../../public/DINFFO.webp"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Experiance() {

    const ImageButton = (URL) => {
        window.open(URL, '_blank');
    }

    const arr = [
        {
            src: 'https://media.licdn.com/dms/image/D4E0BAQG0op6GSZa1PQ/company-logo_200_200/0/1694246237575?e=1711584000&v=beta&t=wEdn9qKvEN1Syam8fGNQ1dOj9Jg45pYhBtD1hqkXqU8',
            jobtitle: 'Software Engineer - Full-Time',
            href: 'https://optimumpartners.co/',
            date: '2021 - 2023',
            name: 'Optimum Partners',
            content: 'Outsourced for US-based Hearst Media Monetization – Ad Product and Tech team.',
            bulletpoints: [
                'Developed web applications using NextJS and React, leveraging powerful features to build responsive, interactive user interfaces with GraphQL on the server side.',
                'Proficient in testing React components and application functionality using tools like Jest and React Testing Library.',
                'Implemented responsive web applications that deliver seamless user experiences across devices and screen sizes.',
                'Set up CI/CD pipelines using tools like GitHub Actions to automate the build, test, and deployment process.',
                'Ensured websites adhered to WCAG guidelines, making them accessible to a wide range of users, including those with disabilities.',
                'Developed server-side applications, using the asynchronous, event-driven architecture of NodeJS to build scalable, high-performance web services and APIs. Applied frameworks like ExpressJS to streamline development and enhance code organization.',
                'Implemented serverless data processing solutions using AWS Lambda and S3, enabling automated file processing, real-time data transformations, and event-driven architectures.'
            ]
        },
        {
            src: Dinffo.src,
            jobtitle: 'Full-Stack Developer - Full-Time',
            href: 'https://www.dinffo.com/',
            date: '2020 - 2021',
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

    const [experiance, setExperiance] = useState([])

    useEffect(()=> {
        axios.get("https://lnqchk9qcd.execute-api.us-east-1.amazonaws.com/v1/experience")
            .then((res) => setExperiance(res.data.response.Items))
            .catch((err) => console.log(err))
    }, [])

    //https://lnqchk9qcd.execute-api.us-east-1.amazonaws.com/v1/experience

    return (
        <ExperianceContainer id="experiance">
            <AboutBorder>
                <TitleContainer>
                    <HomeH1 style={{fontSize: '3rem'}}>
                        Experience
                        <SpanDot>.</SpanDot>

                    </HomeH1>
                    <Line />
                </TitleContainer>
                <div className="timeline">
                    <div className="outer">
                        {experiance.map((elm, index) => {
                            return (
                                <div className="cards" key={index}>
                                    <div className="info">
                                        <h3 className="title">{elm.title.S} {elm.term.S}</h3>
                                        <p className='year'>{elm.companyName.S} {elm.yearFrom.N} - {elm.yearTo.N}</p>
                                        <Content>
                                            <div style={{textAlign: 'center'}}>
                                                {elm.headline.S}
                                            </div>

                                            <ul style={{ marginTop: '1rem' }}>
                                                {elm.descriptions.SS.map((point, index) => {
                                                    return (
                                                        <li key={index}>
                                                            {point}
                                                        </li>
                                                    )
                                                })
                                                }
                                            </ul>
                                        </Content>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* {arr.map((elm, index) => {
                    return (
                        <div key={index}>
                            <JobContainer >
                                <ImageContainer>
                                    <CompanyImage src={elm.src} />
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
                                <ul style={{ marginTop: '1rem' }}>
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
                })} */}
                <Techno />

            </AboutBorder>

        </ExperianceContainer>
    )
}