import { MainPageContainer, IntroContainer, NameLabel, ContentLabel } from "./style";
import About from "../about";
import Experiance from "../experiance";
import Work from "../work";
import Contact from "../contact";

export default function MainPage() {
    return (
    <>
    <MainPageContainer id="home">
        <IntroContainer>
            <NameLabel>
                Hi, I'm Omar Assaf
            </NameLabel>
            <ContentLabel style={{paddingBottom: '13rem'}}>
                I am a Software Engineer with 3 years of experience mainly in the entertainment sector, working with NextJS and React on the front end, NodeJs and Python on the back end, and MySQL and MongoDB for the database.
                I am a quick learner, seeker of knowledge, optimistic, highly organized, and calm person.
                I look forward to bringing those skills and my technical ability to this position.
            </ContentLabel>
        </IntroContainer>

    </MainPageContainer>
            <About />
            <Experiance />
            <Work />
            <Contact />
        </>)
}