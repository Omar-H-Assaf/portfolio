import Image from "next/image";
import { ContentLabel, NameLabel } from "../main_page/style";
import { AboutBorder, AboutContainer, Aboutcontentcontainer } from "./style";

export default function About() {
    return (
        <AboutContainer id="about">
            <AboutBorder>
                <Aboutcontentcontainer>
                    <Image src="/static/images/omar-icon.png" width={300} height={250} style={{ paddingRight: '3rem' }} />
                    <ContentLabel style={{ color: '#333333' }}>
                        I am an accomplished Software Engineer with more than 3-year track record, primarily within the dynamic entertainment sector. My expertise lies in front-end development utilizing NextJS and React, as well as back-end proficiency with NodeJs and Python. In addition, I possess a strong command of database technologies including MySQL and MongoDB.
                    </ContentLabel>
                </Aboutcontentcontainer>
            </AboutBorder>
        </AboutContainer>
    )
}