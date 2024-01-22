import { useState } from "react";
import { NameLabel } from "../main_page/style";
import { CategoryContainer, SelectCategory, TechnoImage, TechnoText, Tool } from "./style";
import { AnimatePresence, motion } from "framer-motion";

const arr = [
    {
        name: "React.JS",
        src: "/physics.png",
        type: ["Frontend", "All"]
    },
    {
        name: "Node.JS",
        src: "/nodejs.svg",
        type: ["Backend", "All"]
    },
    {
        name: "Next.JS",
        src: "/nextjs.svg",
        type: ["Frontend", "All"]
    },
    {
        name: "GraphQL",
        src: "/graphql.svg",
        type: ["Frontend", "All"]
    },
    {
        name: "JavaScript",
        src: "/java-script.png",
        type: ["Frontend", "Backend", "All"]
    },
    {
        name: "TypeScript",
        src: "/typescript.png",
        type: ["Frontend", "Backend", "All"]
    },
    {
        name: "Jira",
        src: "/jira.svg",
        type: ["Others", "All"]
    },
    {
        name: "Python",
        src: "/python.png",
        type: ["Backend", "All"]
    },
    {
        name: "VS Code",
        src: "/vs-code.svg",
        type: ["Others", "All"]
    },
    {
        name: "MongoDB",
        src: "/mongodb.png",
        type: ["Backend", "All"]
    },
    {
        name: "MySQL",
        src: "/mysql.png",
        type: ["Backend", "All"]
    },
    {
        name: "Jest",
        src: "/Jest.svg",
        type: ["Frontend", "Backend", "All"]
    },
    {
        name: "FastAPI",
        src: "/fastapi.svg",
        type: ["Frontend", "All"]
    },
    {
        name: "WCAG 2.1",
        src: "/WCAG.png",
        type: ["Frontend", "All"]
    }
];

const mystyle = {
    display: 'flex',
    height: '8rem',
    width: '8rem',
    borderRadius: '32px',
    boxShadow: '1px 1px 2px #000000',
    marginBottom: '3rem',
    justifyContent: 'center',
    padding: '1rem',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: '3rem',
    background: '#EBEBEB',
    '@media (max-width: 768px)': {
        height: '18rem',
        width: '18rem',
    }
};

export default function Techno() {

    const [selected, setSelected] = useState("All")

    const categorySelected = (select) => {
        setSelected(select)
    }

    return (
        <>
            <NameLabel>
                Tools
            </NameLabel>
            <CategoryContainer>
                <SelectCategory selected={selected === 'All'} onClick={() => categorySelected('All')}>All</SelectCategory>
                <SelectCategory selected={selected === 'Frontend'} onClick={() => categorySelected('Frontend')}>Frontend</SelectCategory>
                <SelectCategory selected={selected === 'Backend'} onClick={() => categorySelected('Backend')}>Backend</SelectCategory>
                <SelectCategory selected={selected === 'Others'} onClick={() => categorySelected('Others')}>Others</SelectCategory>
            </CategoryContainer>

            <Tool className="row">
                <AnimatePresence>
                    {arr.filter(e => e.type.includes(selected)).map((elm, index) => {
                        return (
                            <motion.div
                                className="col-md-4 col-sm-6"
                                style={mystyle}
                                key={index}
                                layout
                                initial={{ transform: "scale(0)" }}
                                animate={{ transform: "scale(1)" }}
                                exit={{ transform: "scale(0)" }}
                            >
                                <TechnoImage src={elm.src} />
                                <TechnoText>{elm.name}</TechnoText>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
                

            </Tool>
        </>
    )

}