import About from "../about";
import Experiance from "../experiance";
import Work from "../work";
import circle from "../../public/circle.jpg";
import { ConsolUnderScore, Image, ImageConatiner, Info, IntroContainer, MainPageContainer, NameLabelHome, Title } from "./style";
import { useEffect } from "react";
import style from '../../styles/Home.module.css';
import Footer from "../footer";

export default function MainPage() {
    useEffect(() => {
        document.body.style.backgroundColor = "#2F4858";
        consoleText(['Software Engineer', 'Frontend Developer', 'Backend Developer'], 'text', ['tomato', '#65d2a3', 'lightblue']);

        function consoleText(words, id, colors) {
            if (colors === undefined) colors = ['#fff'];
            var visible = true;
            var con = document.getElementById('console');
            con.setAttribute('style', 'color:' + colors[0])
            var letterCount = 1;
            var x = 1;
            var waiting = false;
            var target = document.getElementById(id)
            target.setAttribute('style', 'color:' + colors[0])
            window.setInterval(function () {

                if (letterCount === 0 && waiting === false) {
                    waiting = true;
                    target.innerHTML = words[0].substring(0, letterCount)
                    window.setTimeout(function () {
                        var usedColor = colors.shift();
                        colors.push(usedColor);
                        var usedWord = words.shift();
                        words.push(usedWord);
                        x = 1;
                        target.setAttribute('style', 'color:' + colors[0])
                        con.setAttribute('style', 'color:' + colors[0])
                        letterCount += x;
                        waiting = false;
                    }, 1000)
                } else if (letterCount === words[0].length + 1 && waiting === false) {
                    waiting = true;
                    window.setTimeout(function () {
                        x = -1;
                        letterCount += x;
                        waiting = false;
                    }, 1000)
                } else if (waiting === false) {
                    target.innerHTML = words[0].substring(0, letterCount)
                    letterCount += x;
                }
            }, 120)
            window.setInterval(function () {
                if (visible === true) {
                    con.className = 'console-underscore hidden'
                    visible = false;

                } else {
                    con.className = 'console-underscore'

                    visible = true;
                }
            }, 400)
        }
    }, []);

    return (
        <>
            <MainPageContainer id="about">
                <IntroContainer className={style.wrapper}>
                    <NameLabelHome >
                        <div >
                            Hi, I'm Omar Assaf
                        </div>
                        <Title>
                            <div style={{ display: "flex" }}><span id='text'></span><ConsolUnderScore className='console-underscore' id='console'>&#95;</ConsolUnderScore></div>

                        </Title>
                        <Info>
                            Based in Dallas, Texas with Web Development.
                            I connect the dots and provide thoughtful solutions by focusing on strategy. I also make sure those experience are a little bit fun.
                        </Info>
                    </NameLabelHome>

                </IntroContainer>
            </MainPageContainer>
            {/* <About /> */}
            <Experiance />
            <Work />
            <Footer />
            {/* <Contact /> */}
        </>)
}