import Image from "next/image";
import { NameLabel } from "../main_page/style";
import { CompanyImage, TechnoImage, TechnoText, Tool, ToolContainer } from "./style";

export default function Techno() {
    const arr = [
        {
            name: "React.JS",
            src: "/physics.png"
        },
        {
            name: "Node.JS",
            src: "/nodejs.svg"
        },
        {
            name: "Next.JS",
            src: "/nextjs.svg"
        },
        {
            name: "GraphQL",
            src: "/graphql.svg"
        },
        {
            name: "JavaScript",
            src: "/java-script.png"
        },
        {
            name: "TypeScript",
            src: "/typescript.png"
        },
        {
            name: "Jira",
            src: "/jira.svg"
        },
        {
            name: "Python",
            src: "/python.png"
        },
        {
            name: "VS Code",
            src: "/vs-code.svg"
        },
        {
            name: "MongoDB",
            src: "/mongodb.png"
        },
        {
            name: "MySQL",
            src: "/mysql.png"
        },
        {
            name: "Jest",
            src: "/Jest.svg"
        },
        {
            name: "FastAPI",
            src: "/fastapi.svg"
        },
        {
            name: "WCAG 2.1",
            src: "/WCAG.png"
        }
    ];

    return (
        <>
            <NameLabel style={{ color: '#333333' }}>
                Tools
            </NameLabel>
            <Tool className="row">
                {arr.map((elm, index) => {
                    return (
                        <ToolContainer className="col-md-4 col-sm-6" key={index}>
                            <TechnoImage src={elm.src} />
                            <TechnoText>{elm.name}</TechnoText>
                        </ToolContainer>
                    )
                })}

            </Tool>
        </>
    )

}