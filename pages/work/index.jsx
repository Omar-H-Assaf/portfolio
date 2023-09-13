import { useState } from "react";
import { AboutContainer } from "../about/style";
import { NameLabel } from "../main_page/style";
import { ViewImageButton, WorkBox, WorkContainer, WorkContent, WorkTitle } from "./style";

export default function Work() {
    const [isShown, setIsShown] = useState(false);
    const [isShown2, setIsShown2] = useState(false);
    return (
        <AboutContainer id="work">
            <NameLabel style={{ color: '#333333' }}>
                Work Sample
            </NameLabel>
            <WorkContainer>
                <WorkBox onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}>
                        {
                        !isShown ? <WorkTitle>
                            Formula One
                        </WorkTitle> :
                            <WorkContent>
                                Created a MEAN stack application using NodeJS, MongoDB, and Angular.
                                <ViewImageButton>
                                    Show
                                </ViewImageButton>
                            </WorkContent>
                        }
                </WorkBox>
                <WorkBox onMouseEnter={() => setIsShown2(true)}
                    onMouseLeave={() => setIsShown2(false)}>
                    {
                        !isShown2 ? <WorkTitle>
                            Real Estate
                        </WorkTitle> :
                            <WorkContent>
                                Implemented a program to help real estate professionals and clients manage and access real estate information, by selling and buying and renting. Used Spring Boot, MySQL, and ReactJS.
                                <ViewImageButton>
                                    Show
                                </ViewImageButton>
                            </WorkContent>
                    }
                </WorkBox>
            </WorkContainer>
        </AboutContainer>
    )
}