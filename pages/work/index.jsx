import Image from "next/image";
import { AboutContainer } from "../about/style";
import { ArrowImage, IconContainer, ImageWidth, ProjectConatiner, ProjectConatinerWidth, ProjectName, SomeProjectconatiner, WorkContainer, } from "./style";
import { useState } from "react";
import F1Logo from "../../public/f1/f1_logo.svg"
import RealEstate from "../../public/real-estate/icons8-real-estate-100.png"
import ChatIcon from "../../public/chat/chat-4-512.png"
import { ContentLabel, HomeH1, Line, NameLabel, SpanDot, TitleContainer } from "../main_page/style";
import Link from "next/link";

export default function Work() {
    const arr = [{
        name: 'F1',
        color: '#15151e'
    }]


    return (
        <AboutContainer id="work">
            <TitleContainer>
                <HomeH1 style={{ fontSize: '3rem' }}>
                    Projects
                    <SpanDot>.</SpanDot>

                </HomeH1>
                <Line />
            </TitleContainer>
            <WorkContainer>
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
                    <Link href={'/projects/property-management'}>
                        <IconContainer>
                            <ArrowImage src={"/up-right-arrow.png"} />
                        </IconContainer>
                    </Link>
                </ProjectConatinerWidth>
                <ProjectConatinerWidth color="#21301C">
                    <ImageWidth src={ChatIcon.src} />
                    <Link href={'/projects/chat'}>
                        <IconContainer>
                            <ArrowImage src={"/up-right-arrow.png"} />
                        </IconContainer>
                    </Link>
                </ProjectConatinerWidth>
            </WorkContainer>
        </AboutContainer>
    )
}