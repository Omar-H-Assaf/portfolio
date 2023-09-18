import { useEffect } from "react";
import { BigContainer, BottomContainer, Columncontainer, ContentContainer, Description, Description2, DescriptionContainer, ExitButton, HeadLineContainer, Header, ImageFit, MediumContainer, PopUpContainer, Rowcontainer, SmallContainer } from "./style";
import Image from "next/image";
import Link from "next/link";
import HomePageF1 from "../../../public/f1/home.png"
import Driver from "../../../public/f1/driver.png"
import Team from "../../../public/f1/team.png"
import Teams from "../../../public/f1/teams.png"


export default function PopUp() {
    useEffect(() => {
        document.body.style.backgroundColor = "rgb(9, 12, 16)";
    }, [])
    return (<PopUpContainer>
        <Link href={'/'}>
            <ExitButton>
                <Image src={"/close-button.png"} width={20} height={20} />
            </ExitButton>
        </Link>
        <ContentContainer>
            <Header>
                Formula One
            </Header>
            <HeadLineContainer>
                <Description>
                    Formula One is the highest class of international racing for open-wheel single-seater formula racing cars sanctioned by the Fédération Internationale de l'Automobile.
                </Description>
                <Description2>
                    Creating an F1 (Formula 1) application using the MERN stack is an exciting project that combines cutting-edge web development technologies with the thrill of Formula 1 racing. The MERN stack, which stands for MongoDB, Express.js, React, and Node.js, is a popular choice for building modern web applications due to its flexibility and scalability.
                </Description2>
            </HeadLineContainer>
        </ContentContainer>
        <BottomContainer>
            <BigContainer>
                <ImageFit src={Team.src} />
            </BigContainer>
            <Columncontainer>
                <Rowcontainer>
                    <SmallContainer>
                        <ImageFit src={Driver.src} />
                    </SmallContainer>
                    <SmallContainer>
                        <ImageFit src={Teams.src} />
                    </SmallContainer>
                </Rowcontainer>

                <MediumContainer>
                    <ImageFit src={HomePageF1.src} />
                </MediumContainer>
            </Columncontainer>

        </BottomContainer>
    </PopUpContainer>)
}