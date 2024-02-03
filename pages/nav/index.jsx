import { Button, Header } from "./style";
import { CompanyImage, SocialContainer } from "../experiance/style";

export default function NavBar() {

    const resumeDownload = () => {
        window.open('ASSAFOmar-Resume.pdf')
    }


    return (
        <Header>
            
                <SocialContainer >
                    <CompanyImage src={"/linkedin.png"} onClick={() => ImageButton("https://www.linkedin.com/in/omar-assaf97")} style={{ cursor: 'pointer' }} />
                    <CompanyImage src={"/github.png"} onClick={() => ImageButton("https://github.com/Omar-H-Assaf")} style={{ cursor: 'pointer' }} />
                </SocialContainer>
                <Button onClick={resumeDownload}>
                    <div>
                        My Resume
                    </div>
                </Button>

        </Header>

    )
}