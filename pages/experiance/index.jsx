import Image from "next/image";
import { AboutBorder } from "../about/style";
import { ContentLabel, NameLabel } from "../main_page/style";
import { Content, Date, ExperianceContainer, Href, ImageContainer, JobContainer, JobContent, JobTitle, ListContent, SocialContainer } from "./style";
import Techno from "./techno";

export default function Experiance() {

    const ImageButton = (URL) => {
        window.open(URL, '_blank');
    }

    return (
        <ExperianceContainer id="experiance">
            <AboutBorder>
                <NameLabel style={{ color: '#333333' }}>
                    Experiances
                </NameLabel>
                    <JobContainer>
                    <ImageContainer>
                        <Image src={"/optimumpartner.jpeg"} width={50} height={50} style={{
                            borderRadius: '10px', boxShadow: 'transparent 0 0 0 2px inset',
                            overflow: 'hidden'
                        }} />
                        <div>
                            <JobTitle>
                                Software Engineer - Full-Time
                            </JobTitle>
                            <Href target="_blank" href='https://optimumpartners.co/'>Optimum Partners</Href>
                        </div>

                    </ImageContainer>
                    <Date>
                        jun 2021 - jun 2023
                    </Date>
                </JobContainer>
                <Content>
                        Outsourced for US-based Hearst Media Monetization – Ad Product and Tech team.
                </Content>

                <br />
                <JobContainer>
                    <ImageContainer>
                        <Image src={"/DINFFO.webp"} width={50} height={50} style={{
                            borderRadius: '10px', boxShadow: 'transparent 0 0 0 2px inset',
                            overflow: 'hidden'
                        }} />
                        <div>
                            <JobTitle>
                                Full-Stack Developer - Full-Time
                            </JobTitle>
                            <Href target="_blank" href='https://optimumpartners.co/'>DINFFO</Href>
                        </div>
                    </ImageContainer>
                    <Date>
                        mar 2020 - jun 2021
                    </Date>
                </JobContainer>
                <Content>
                    Outsourced for US-based Hearst Media Monetization – Ad Product and Tech team.
                </Content>
                <Techno />

                <NameLabel style={{ color: '#333333' }}>
                    Social Netwrok
                </NameLabel>
                <SocialContainer>
                    <Image src={"/linkedin.png"} width={70} height={70} style={{
                        borderRadius: '10px', boxShadow: 'transparent 0 0 0 2px inset',
                        overflow: 'hidden', cursor: 'pointer'
                    }} onClick={() => ImageButton("https://www.linkedin.com/in/omar-assaf97")}/>
                    <Image src={"/github.png"} width={70} height={70} style={{
                        borderRadius: '10px', boxShadow: 'transparent 0 0 0 2px inset',
                        overflow: 'hidden', cursor: 'pointer'
                       
                    }} onClick={() => ImageButton("https://github.com/Omar-H-Assaf")}/>
                </SocialContainer>
                <NameLabel style={{ color: '#333333' }}>
                    Languages
                </NameLabel>
                <SocialContainer>
                    <Image src={"/united-kingdom.png"} width={70} height={70} style={{
                        borderRadius: '10px', boxShadow: 'transparent 0 0 0 2px inset',
                        overflow: 'hidden'
                    }} />
                    <Image src={"/united-arab.png"} width={70} height={70} style={{
                        borderRadius: '10px', boxShadow: 'transparent 0 0 0 2px inset',
                        overflow: 'hidden'

                    }} />
                </SocialContainer>
            </AboutBorder>

        </ExperianceContainer>
    )
}