import { useEffect } from "react";
import { BigContainer, BottomContainer, Columncontainer, ContentContainer, Description, Description2, DescriptionContainer, Exit, ExitButton, HeadLineContainer, Header, MediumContainer, PopUpContainer, Rowcontainer, SmallContainer } from "./style";
import Image from "next/image";
import Link from "next/link";

export default function PopUp() {
    useEffect(() => {
        document.body.style.backgroundColor = "rgb(9, 12, 16)";
    }, [])
    return (<PopUpContainer>
        <Link href={'/'}>
            <ExitButton>
                <Image src={"/close-button.png"} width={20} height={20}/>
            </ExitButton>
        </Link>
        <ContentContainer>
            <Header>
                Formula One
            </Header>
            <HeadLineContainer>
                <Description>
                    Created a MEAN stack application using NodeJS, MongoDB, and Angular
                </Description>
                <DescriptionContainer>
                    <Description2>
                        Created a MEAN stack application using NodeJS, MongoDB, and Angular
                    </Description2>
                </DescriptionContainer>
            </HeadLineContainer>
        </ContentContainer>
        <BottomContainer>
            <BigContainer>

            </BigContainer>
            <Columncontainer>
            <Rowcontainer>
                    <SmallContainer>

                    </SmallContainer>
                    <SmallContainer>

                    </SmallContainer>
            </Rowcontainer>

                <MediumContainer>

                </MediumContainer>
            </Columncontainer>
 
        </BottomContainer>
    </PopUpContainer>)
}