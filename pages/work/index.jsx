import Image from "next/image";
import { AboutContainer } from "../about/style";
import { ArrowImage, IconContainer, ImageWidth, ProjectConatiner, ProjectConatinerWidth, ProjectName, SomeProjectconatiner, WorkContainer, } from "./style";
import { useState } from "react";
import F1Logo from "../../public/f1/f1_logo.svg"
import RealEstate from "../../public/real-estate/icons8-real-estate-100.png"
import ChatIcon from "../../public/chat/chat-4-512.png"
import { ContentLabel } from "../main_page/style";
import Link from "next/link";

export default function Work() {
    const arr = [{
        name: 'F1',
        color: '#15151e'
    }]


    return (
        <AboutContainer id="work">
            <WorkContainer>
                <ProjectConatinerWidth color="#F1FBF7">
                    <SomeProjectconatiner>
                        <ImageWidth src="/static/images/omar-icon.png" width={150} height={150} />
                        <ContentLabel style={{ color: '#333333', padding: '2rem' }}>
                            This is a collection of some projects.
                        </ContentLabel>
                    </SomeProjectconatiner>
                </ProjectConatinerWidth>
                <ProjectConatinerWidth color="#e10600">
                    <ImageWidth src={F1Logo.src} />
                    <Link href={'/projects/f1'}>
                        <IconContainer >
                            <ArrowImage src={"/up-right-arrow.png"} />
                        </IconContainer>
                    </Link>
                </ProjectConatinerWidth>
                <ProjectConatinerWidth color="#15151e">
                    <ImageWidth src={RealEstate.src} />
                    <IconContainer>
                        <ArrowImage src={"/up-right-arrow.png"} />
                    </IconContainer>
                </ProjectConatinerWidth>
                <ProjectConatinerWidth color="#21301C">
                    <ImageWidth src={ChatIcon.src} />
                    <IconContainer>
                        <ArrowImage src={"/up-right-arrow.png"} />
                    </IconContainer>
                </ProjectConatinerWidth>
            </WorkContainer>
        </AboutContainer>
    )
}