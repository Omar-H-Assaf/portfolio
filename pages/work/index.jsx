import Image from "next/image";
import { AboutContainer } from "../about/style";
import { IconContainer, ImageWidth, ProjectConatiner, ProjectConatinerWidth, ProjectName, SomeProjectconatiner, WorkContainer,} from "./style";
import { useState } from "react";
import F1Logo from "../../public/f1/f1_logo.svg"
import RealEstate from "../../public/real-estate/icons8-real-estate-100.png"
import ChatIcon from "../../public/chat/chat-4-512.png"
import { ContentLabel } from "../main_page/style";

export default function Work() {
    const [visible, setVisible] = useState(false);

    const mouseEnter = (isEnter) => {
        
        setVisible(isEnter);
    }
    const [visible2, setVisible2] = useState(false);

    const mouseEnter2 = (isEnter) => {

        setVisible2(isEnter);
    }
    const [visible3, setVisible3] = useState(false);

    const mouseEnter3 = (isEnter) => {

        setVisible3(isEnter);
    }

    const arr = [{
        name: 'F1',
        color: '#15151e'
    }]
    

    return (
        <AboutContainer id="work">
            <WorkContainer>
                <ProjectConatinerWidth color="#F1FBF7">
                    <SomeProjectconatiner>
                        <ImageWidth src="/static/images/omar-icon.png" width={150} height={150} />
                        <ContentLabel style={{ color: '#333333', padding: '2rem' }}>
                            This is a collection of some projects.
                        </ContentLabel>
                    </SomeProjectconatiner>

                </ProjectConatinerWidth>
                <ProjectConatinerWidth color="#e10600">
                    <ImageWidth src={F1Logo.src} />
                    <IconContainer onMouseEnter={()=> mouseEnter(true)} onMouseLeave={() => mouseEnter(false)}>
                        {visible && <ProjectName>F1</ProjectName>}
                        <Image src={"/up-right-arrow.png"} width={12} height={12} />
                    </IconContainer>
                </ProjectConatinerWidth>
                <ProjectConatinerWidth color="#15151e">
                    <ImageWidth src={RealEstate.src} />
                    <IconContainer onMouseEnter={() => mouseEnter(true)} onMouseLeave={() => mouseEnter(false)}>
                        {visible && <ProjectName>Real Estate</ProjectName>}
                        <Image src={"/up-right-arrow.png"} width={12} height={12} />
                    </IconContainer>
                </ProjectConatinerWidth>
                <ProjectConatinerWidth color="#21301C">
                    <ImageWidth src={ChatIcon.src}/>
                    <IconContainer onMouseEnter={() => mouseEnter(true)} onMouseLeave={() => mouseEnter(false)}>
                        {visible && <ProjectName>F1</ProjectName>}
                        <Image src={"/up-right-arrow.png"} width={12} height={12} />
                    </IconContainer>
                </ProjectConatinerWidth>
                {/* <ProjectConatiner>
                    <IconContainer onMouseEnter={() => mouseEnter2(true)} onMouseLeave={() => mouseEnter2(false)}>
                        {visible2 && <ProjectName>Real State</ProjectName>}
                        <Image src={"/up-right-arrow.png"} width={12} height={12} />
                    </IconContainer>
                </ProjectConatiner>

                <ProjectConatiner>
                    <Link href={'/projects/f1'}>
                        <IconContainer onMouseEnter={() => mouseEnter3(true)} onMouseLeave={() => mouseEnter3(false)}>
                            {visible3 && <ProjectName>Chat</ProjectName>}
                            <Image src={"/up-right-arrow.png"} width={12} height={12} />
                        </IconContainer>
                    </Link>
                </ProjectConatiner> */}

            </WorkContainer>
        </AboutContainer>
    )
}