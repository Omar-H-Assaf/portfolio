import Image from "next/image";
import { NameLabel } from "../main_page/style";
import { Tool, ToolContainer } from "./style";

export default function Techno() {

    return (
        <>
            <NameLabel style={{ color: '#333333' }}>
                Tools
            </NameLabel>
            <Tool>
                <ToolContainer>
                    <Image src={"/physics.png"} width={50} height={50}/>
                    <p>React.JS</p>
                </ToolContainer>
                <ToolContainer>
                    <Image src={"/nodejs.svg"} width={50} height={50} />
                    <p>Node.JS</p>
                </ToolContainer>
                <ToolContainer>
                    <Image src={"/nextjs.svg"} width={50} height={50} />
                    <p>Next.JS</p>
                </ToolContainer>
                <ToolContainer>
                    <Image src={"/graphql.svg"} width={50} height={50} />
                    <p>GraphQl</p>
                </ToolContainer>
                <ToolContainer>
                    <Image src={"/java-script.png"} width={50} height={50} />
                    <p>JavaScript</p>
                </ToolContainer>
                <ToolContainer>
                    <Image src={"/typescript.png"} width={50} height={50} />
                    <p>TypeScript</p>
                </ToolContainer>
                <ToolContainer>
                    <Image src={"/jira.svg"} width={50} height={50} />
                    <p>Jira</p>
                </ToolContainer>
            </Tool>
            <Tool>
                <ToolContainer>
                    <Image src={"/python.png"} width={50} height={50} />
                    <p>Python</p>
                </ToolContainer>
                <ToolContainer>
                    <Image src={"/vs-code.svg"} width={50} height={50} />
                    <p>VSCode</p>
                </ToolContainer>
                <ToolContainer>
                    <Image src={"/mongodb.png"} width={50} height={50} />
                    <p>MongoDB</p>
                </ToolContainer>
                <ToolContainer>
                    <Image src={"/mysql.png"} width={50} height={50} />
                    <p>MySQL</p>
                </ToolContainer>
                <ToolContainer>
                    <Image src={"/dart.svg"} width={50} height={50} />
                    <p>Dart</p>
                </ToolContainer>
                <ToolContainer>
                    <Image src={"/express-js.svg"} width={50} height={50} />
                    <p>Express JS</p>
                </ToolContainer>
                <ToolContainer>
                    <Image src={"/github.png"} width={50} height={50} />
                    <p>GitHub</p>
                </ToolContainer>
            </Tool>

        </>
    )

}