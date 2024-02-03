import axios from "axios";
import { AboutContainer } from "../about/style"
import { HomeH1, Line, NameLabel, SpanDot, TitleContainer } from "../main_page/style"
import { BoxContainer, Button, Input, TextArea, Title } from "./style"
import { useState } from "react";

const Contact = () => {

    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    function handleSubmit(event) {
        setIsSending(true);
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        
        axios.post("https://lnqchk9qcd.execute-api.us-east-1.amazonaws.com/v1/contact", formJson).then((response) => {
            if (response.status === 200) {
                setIsSent(true)
            }
        }).catch((err) => console.log("err", err))
            .finally(() => setIsSending(false))
    }

    return <AboutContainer id="contact">

        <TitleContainer style={{ flexDirection: 'row-reverse' }}>
            <HomeH1 style={{ fontSize: '3rem' }}>
                Contact
                <SpanDot>.</SpanDot>

            </HomeH1>
            <Line />
        </TitleContainer>
        <NameLabel style={{alignItems: 'center', justifyContent: 'center', display: 'flex', width: '70%', fontWeight: '200'}}>
            <p style={{textAlign: 'center'}}>
                Shoot me an email if you want to connect! You can also find me on 
                <a href="https://www.linkedin.com/in/omar-assaf97/" style={{ color: '#0aff9d', textDecoration: 'none'}}> Linkedin </a> 
                if that's more your speed.
            </p>
        </NameLabel>
        <BoxContainer>
            <Title>
                Email Me!
            </Title>
            <form onSubmit={handleSubmit}>
                <Input type="email" placeholder="Your Email" name="email" required/>
                <Input type="text" placeholder="Your Name" name="name" required />
                <Input type="text" placeholder="Subject" name="subject" required />
                <TextArea rows="4" placeholder="Message" name="message" required/>
                {isSending ? <div style={{ display: "flex", justifyContent: 'center', alignItems: 'center'}}><div class="lds-dual-ring"></div></div> :  <Button type="submit" value="Send" name="send"/>}
                {isSent  && <Title style={{fontSize: '1rem', paddingTop: '1rem', justifyContent: 'center', alignItems: 'center', display:'flex'}}>
                    Email Sent Successfully!
                </Title>}
            </form>


        </BoxContainer>
    </AboutContainer>
}
export default Contact