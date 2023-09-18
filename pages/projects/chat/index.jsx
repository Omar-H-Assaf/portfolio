import Image from "next/image";
import Link from "next/link";
import Home from "../../../public/chat/home.png"
import Login from "../../../public/chat/login.png"
import SignUp from "../../../public/chat/signup.png"
import Phone from "../../../public/chat/phone.png"
import { useEffect } from "react";
import { BigContainer, BottomContainer, Columncontainer, ContentContainer, Description, Description2, ExitButton, HeadLineContainer, Header, ImageFit, MediumContainer, PopUpContainer, Rowcontainer, SmallContainer } from "../f1/style";

export default function Chat() {
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
                Chat Application
            </Header>
            <HeadLineContainer>
                <Description>
                    In today's fast-paced digital world, communication is at the heart of our interactions. A chat application is a versatile and indispensable tool that empowers individuals and businesses to connect and converse in real time, regardless of geographical boundaries.
                </Description>
                <Description2>
                    Creating a chat application using Node.js, Firebase, HTML, CSS, and Bootstrap empowers you to build a real-time communication platform that meets the needs of today's digitally connected world. Whether it's for personal use or a broader audience, your chat app can facilitate seamless interactions, foster collaboration, and bring people together. With dedication and creativity, you can create a chat application that offers both functionality and aesthetics, making it a valuable addition to the digital landscape.                </Description2>
            </HeadLineContainer>
        </ContentContainer>
        <BottomContainer>
            <BigContainer>
                <ImageFit src={Phone.src} style={{ objectPosition: 'top' }} />
            </BigContainer>
            <Columncontainer>
                <Rowcontainer>
                    <SmallContainer>
                        <ImageFit src={Login.src} style={{ objectPosition: 'center' }} />
                    </SmallContainer>
                </Rowcontainer>

                <MediumContainer>
                    <ImageFit src={Home.src} style={{ objectPosition: 'down', objectFit: 'fill' }} />
                </MediumContainer>
            </Columncontainer>

        </BottomContainer>
    </PopUpContainer>)
}