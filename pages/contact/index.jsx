import { ExperianceContainer, Href } from "../experiance/style";
import { NameLabel } from "../main_page/style";
import { ContactInfoContainer } from "./style";

export default function Contact() {
    return (
        <ExperianceContainer id="contact">
            <NameLabel>
                Contact Information
            </NameLabel>
            <ContactInfoContainer>
                Email: omar.assaf97@icloud.com
            </ContactInfoContainer>
            <ContactInfoContainer>
                Phone: +1(641)233-9331
            </ContactInfoContainer>
            <ContactInfoContainer >
                LinkedIn: <Href target="_blank" href="https://www.linkedin.com/in/omar-assaf97">https://www.linkedin.com/in/omar-assaf97</Href>
            </ContactInfoContainer>
            <ContactInfoContainer>
                GitHub: <Href target="_blank" href="https://github.com/omar-H-Assaf/">https://github.com/omar-H-Assaf</Href> 
            </ContactInfoContainer>
        </ExperianceContainer>
    )
}