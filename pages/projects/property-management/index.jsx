import Image from "next/image";
import Link from "next/link";
import Home from "../../../public/real-estate/home.png"
import Admin from "../../../public/real-estate/admin.png"
import Offer from "../../../public/real-estate/offer.png"
import Like from "../../../public/real-estate/like.png"
import { useEffect } from "react";
import { BigContainer, BottomContainer, Columncontainer, ContentContainer, Description, Description2, ExitButton, HeadLineContainer, Header, HrefGitHub, ImageFit, MediumContainer, PopUpContainer, Rowcontainer, SmallContainer } from "../f1/style";

export default function RealEstate() {
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
                Property Management Portal
            </Header>
            <HeadLineContainer>
                <Description>
                    Welcome to the future of property management! Our Property Management Portal is your one-stop destination for efficient and streamlined property management, designed to make your life as a property owner, landlord, or property manager easier than ever before.
                </Description>
                <Description2>
                    Creating a Property Management Portal application using React, Spring Boot, and PostgreSQL is a robust and modern approach to building a feature-rich, scalable, and efficient platform for property management. This combination of technologies allows for a seamless user experience, powerful backend functionality, and robust database management.
                    <br />
                    <br />
                    <HrefGitHub target="_blank" href="https://github.com/Omar-H-Assaf/real_estate_application">https://github.com/Omar-H-Assaf/real_estate_application</HrefGitHub>
                </Description2>
            </HeadLineContainer>
        </ContentContainer>
        <BottomContainer>
            <BigContainer>
                <ImageFit src={Home.src} style={{ objectPosition: 'center' }}/>
            </BigContainer>
            <Columncontainer>
                <Rowcontainer>
                    <SmallContainer>
                        <ImageFit src={Like.src} style={{ objectPosition: 'center' }} />
                    </SmallContainer>
                    <SmallContainer>
                        <ImageFit src={Offer.src} style={{ objectPosition: 'center' }} />
                    </SmallContainer>
                </Rowcontainer>

                <MediumContainer>
                    <ImageFit src={Admin.src} style={{ objectPosition: 'center' }} />
                </MediumContainer>
            </Columncontainer>

        </BottomContainer>
    </PopUpContainer>)
}