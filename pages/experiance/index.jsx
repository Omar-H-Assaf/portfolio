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
            content: 'Outsourced for US-based Hearst Media Monetization – Ad Product and Tech team.'
        },
        {
            src: Dinffo.src,
            jobtitle: 'Full-Stack Developer - Full-Time',
            href: 'https://www.dinffo.com/',
            date: 'Mar 2020 - Jun 2021',
            content: 'Outsourced for US-based Hearst Media Monetization – Ad Product and Tech team.'
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
                                        <Href target="_blank" href={elm.href}>Optimum Partners</Href>
                                    </JobDescription>

                                </ImageContainer>
                                <Date>
                                    {elm.date}
                                </Date>
                            </JobContainer>
                            <Content>
                                {elm.content}
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