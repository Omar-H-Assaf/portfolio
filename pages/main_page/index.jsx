import About from "../about";
import Experiance from "../experiance";
import Work from "../work";
import circle from "../../public/circle.jpg";
import { Image, ImageConatiner, Info, IntroContainer, MainPageContainer, NameLabelHome, Title } from "./style";
import { useEffect } from "react";

export default function MainPage() {
    useEffect(() => {
        document.body.style.backgroundColor = "#000";
    }, []);

    return (
        <>
            <MainPageContainer>
                <IntroContainer>
                    <NameLabelHome>
                        Hi, I'm Omar Assaf
                        <Title>
                            Software Engineer
                        </Title>
                        <Info>
                            Based in Dallas, Texas with Web Development.
                            I connect the dots and provide thoughtful solutions by focusing on strategy. I also make sure those experience are a little bit fun.
                        </Info>
                    </NameLabelHome>
                    <ImageConatiner>
                        <Image src={circle.src} />

                    </ImageConatiner>
                </IntroContainer>
            </MainPageContainer>
            <About />
            <Experiance />
            <Work />
            {/* <Contact /> */}
        </>)
}