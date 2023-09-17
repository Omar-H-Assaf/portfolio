import Image from "next/image";
import { ContentLabel } from "../main_page/style";
import { AboutBorder, AboutContainer, AboutImage, Aboutcontentcontainer } from "./style";

export default function About() {
    return (
        <AboutContainer id="about">
            <AboutBorder>
                <Aboutcontentcontainer>
                    <AboutImage src="/omar.jpeg" />
                    <ContentLabel style={{ color: '#333333' }}>
                        I am an accomplished Software Engineer with more than 3-year track record, primarily within the dynamic entertainment sector. My expertise lies in front-end development utilizing NextJS and React, as well as back-end proficiency with NodeJs and Python. In addition, I possess a strong command of database technologies including MySQL and MongoDB.
                    </ContentLabel>
                </Aboutcontentcontainer>
            </AboutBorder>
        </AboutContainer>
    )
}