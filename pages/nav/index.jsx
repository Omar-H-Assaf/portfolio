import Image from "next/image";
import { Button, LogoContainer, Nav, NavLabel, NavLabelContainer } from "./style";
import { useState } from "react";

export default function NavBar() {

    const [isScrolling, setIsScrolling] = useState(false)

    const about = (id) => {
        if (typeof document !== 'undefined') {
            const elm = document.getElementById(id);
            elm.scrollIntoView();
        }
    }

    const resumeDownload = () => {
        window.open('ASSAFOmar-Resume.pdf')
    }
    if (typeof window !== 'undefined') {
        window.onscroll = function () {
            const top = window.scrollY;
            if(top > 100) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        }
    }

    return (
        <Nav scroll={isScrolling}>
            <LogoContainer>
                <Image src="/oa-white.png" width={40} height={40} style={{cursor: "pointer"}} onClick={() => about("home")} />
            </LogoContainer>
            <NavLabelContainer>
                <NavLabel onClick={() => about("about")}>
                    About
                </NavLabel>
                <NavLabel onClick={() => about("experiance")}>
                    Experiance
                </NavLabel>
                <NavLabel onClick={() => about("work")}>
                    Work
                </NavLabel>
                <NavLabel onClick={() => about("contact")}>
                    contact
                </NavLabel>
                <Button onClick={resumeDownload}>
                    <div>
                        Resume
                    </div>
                </Button>
            </NavLabelContainer>

        </Nav>

    )
}