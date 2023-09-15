import Image from "next/image";
import { AboutContainer } from "../about/style";
import { IconContainer, ProjectConatiner, ProjectConatinerWidth, ProjectName, WorkContainer,} from "./style";
import { useState } from "react";
import Link from "next/link";

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

    

    return (
        <AboutContainer id="work">
            <WorkContainer>
                <ProjectConatinerWidth>
                    <IconContainer onMouseEnter={()=> mouseEnter(true)} onMouseLeave={() => mouseEnter(false)}>
                        {visible && <ProjectName>F1</ProjectName>}
                        <Image src={"/up-right-arrow.png"} width={12} height={12} />
                    </IconContainer>
                </ProjectConatinerWidth>
                <ProjectConatiner>
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
                </ProjectConatiner>

            </WorkContainer>
        </AboutContainer>
    )
}