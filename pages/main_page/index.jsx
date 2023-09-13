import { MainPageContainer, IntroContainer, Image, ImageConatiner, NameLabelHome, Title, Info } from "./style";
import About from "../about";
import Experiance from "../experiance";
import Work from "../work";
import Contact from "../contact";
import circle from "../../public/circle.jpg";

export default function MainPage() {
    return (
    <>
    <MainPageContainer id="home">
        <IntroContainer>
                    <NameLabelHome>
                Hi, I'm Omar Assaf
                        <Title>
                            Software Engineer
                        </Title>
                        <Info>
                            Based in Dallas, Texas with background in Front-End and Back-End Development.
                            I connect the dots and provide throuhtful solutions by focusing on strategy. I also make sure those experiance are a little bit fun.
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
            <Contact />
        </>)
}