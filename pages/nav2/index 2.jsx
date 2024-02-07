import Image from "next/image";
import { LogoContainer } from "../nav/style";
import { Nav2Container, NavHref } from "./style";

const Nav2 = () => {

    const about = (id) => {
        if (typeof document !== 'undefined') {
            const elm = document.getElementById(id);
            elm.scrollIntoView();
        }
    }

    return <Nav2Container>
        <LogoContainer>
            <Image alt="logo" src="/oa-white.png" width={40} height={40} />
        </LogoContainer>
        <NavHref onClick={() => about("about")}>About</NavHref>
        <NavHref onClick={() => about("experiance")}>Exp.</NavHref>
        <NavHref onClick={() => about("work")}>Project</NavHref>
        <NavHref onClick={() => about("contact")}>Contact</NavHref>
    </Nav2Container>
}
export default Nav2;
