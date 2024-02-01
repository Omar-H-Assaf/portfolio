import axios from "axios";
import { AboutContainer } from "../about/style"
import { NameLabel } from "../main_page/style"
import { BoxContainer, Button, Input, TextArea, Title } from "./style"

const Contact = () => {

    function handleSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        axios.post("https://lnqchk9qcd.execute-api.us-east-1.amazonaws.com/v1/contact", formJson, {
            headers: {
                "Access-Control-Allow-Origin": '*'
            }}).then((response) => {
            console.log(response);
        }).catch((err) => console.log(err))
    }

    return <AboutContainer id="contact">

        <NameLabel>
            Contact
        </NameLabel>
        <NameLabel>
            Feel free to reach out!
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
                <Button type="submit" value="Send" name="send"/>
            </form>


        </BoxContainer>
    </AboutContainer>
}
export default Contact