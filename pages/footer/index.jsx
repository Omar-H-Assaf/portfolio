import { CompanyImage, SocialContainer } from "../experiance/style";
import { NameLabel } from "../main_page/style";
import { NavLabel, NavLabelContainer } from "../nav/style";
import { FooterContainer } from "./style";

const Footer = () => {

    const about = (id) => {
        if (typeof document !== 'undefined') {
            const elm = document.getElementById(id);
            elm.scrollIntoView();
        }
    }

    return <FooterContainer>
        <NavLabelContainer>
            <NavLabel onClick={() => about("about")}>
                About
            </NavLabel>
            <NavLabel onClick={() => about("experiance")}>
                Experiance
            </NavLabel>
            <NavLabel onClick={() => about("work")}>
                Projects
            </NavLabel>
            <NavLabel onClick={() => about("contact")}>
                contact
            </NavLabel>
        </NavLabelContainer>
        <SocialContainer style={{marginTop: '2rem'}}>
            <CompanyImage src={"/linkedin.png"} onClick={() => ImageButton("https://www.linkedin.com/in/omar-assaf97")} style={{ cursor: 'pointer' }} />
            <CompanyImage src={"/github.png"} onClick={() => ImageButton("https://github.com/Omar-H-Assaf")} style={{ cursor: 'pointer' }} />
        </SocialContainer>
        <NameLabel style={{fontSize: '16px'}}>© 2024 Omar Assaf. All rights reserved.</NameLabel>
    </FooterContainer>
}

export default Footer;