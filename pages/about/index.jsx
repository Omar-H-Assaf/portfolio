import Image from "next/image";
import { ContentLabel, NameLabel } from "../main_page/style";
import { AboutContainer, Aboutcontentcontainer } from "./style";

export default function About() {
    return (
        <AboutContainer id="about">
            <NameLabel style={{ color: '#333333'}}>
                About Me
            </NameLabel>
            <Aboutcontentcontainer>
                <Image alt="omar"  src="/omar.jpeg" width={350} height={350} style={{paddingRight: '3rem'}}/>
                <ContentLabel style={{ color: '#333333' }}>
                    I am an accomplished Software Engineer with more than 3-year track record, primarily within the dynamic entertainment sector. My expertise lies in front-end development utilizing NextJS and React, as well as back-end proficiency with NodeJs and Python. In addition, I possess a strong command of database technologies including MySQL and MongoDB.
                    My journey in software engineering has instilled in me a deep commitment to continuous learning. I am inherently driven by a thirst for knowledge, maintaining an optimistic outlook even in challenging situations. My strong organizational skills contribute to a calm and composed demeanor that enhances my problem-solving capabilities.
                    I am enthusiastic about the prospect of applying my well-rounded skill set and technical prowess to this role. Eager to contribute, I am confident in the value I can bring to the team and the opportunity to further elevate my capabilities."
                    Feel free to incorporate this revised statement into your communication as needed.
                </ContentLabel>
            </Aboutcontentcontainer>
        </AboutContainer>
    )
}