import { useEffect, useState } from "react";
import { HomeH1, Line, NameLabel, SpanDot, TitleContainer } from "../main_page/style";
import { CategoryContainer, SelectCategory, TechnoImage, TechnoText, Tool } from "./style";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

const arr = [
    {
        name: "React.JS",
        src: "https://assaf-omar-portfolio.s3.amazonaws.com/images/physics.png",
        type: ["Frontend", "All"]
    },
    {
        "skillName": "Node.JS",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/nodejs.svg",
        "types": ["Backend", "All"]
    },
    {
        "skillName": "Next.JS",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/nextjs.svg",
        "types": ["Frontend", "All"]
    },
    {
        "skillName": "GraphQL",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/graphql.svg",
        "types": ["Frontend", "All"]
    },
    {
        "skillName": "JavaScript",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/java-script.png",
        "types": ["Frontend", "Backend", "All"]
    },
    {
        "skillName": "TypeScript",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/typescript.png",
        "types": ["Frontend", "Backend", "All"]
    },
    {
        "skillName": "Jira",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/jira.svg",
        "types": ["Others", "All"]
    },
    {
        "skillName": "Python",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/python.png",
        "types": ["Backend", "All"]
    },
    {
        "skillName": "VS Code",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/vs-code.svg",
        "types": ["Others", "All"]
    },
    {
        "skillName": "MongoDB",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/mongodb.png",
        "types": ["Backend", "All"]
    },
    {
        "skillName": "MySQL",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/mysql.png",
        "types": ["Backend", "All"]
    },
    {
        "skillName": "Jest",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/Jest.svg",
        "types": ["Frontend", "Backend", "All"]
    },
    {
        "skillName": "AWS",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/amazon-aws.svg",
        "types": ["Other", "All"]
    },
    {
        "skillName": "WCAG 2.1",
        "src": "https://assaf-omar-portfolio.s3.amazonaws.com/images/WCAG.png",
        "types": ["Frontend", "All"]
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
    '@media (maxWidth: 768px)': {
        height: '18rem',
        width: '18rem',
    }
};

export default function Techno() {

    const [selected, setSelected] = useState("All")

    const categorySelected = (select) => {
        setSelected(select)
    }

    const [skills, setSkills] = useState([])

    useEffect(()=> {
        axios.get("https://lnqchk9qcd.execute-api.us-east-1.amazonaws.com/v1/skills")
            .then((res) => setSkills(res.data.response.Items))
            .catch((err) => console.log(err))
    }, [])


    return (
        <>
            <TitleContainer style={{ flexDirection: 'row-reverse', paddingTop: '9.6rem'}}>
                <HomeH1 style={{ fontSize: '3rem' }}>
                    Skills
                    <SpanDot>.</SpanDot>

                </HomeH1>
                <Line />
            </TitleContainer>
            <CategoryContainer>
                <SelectCategory selected={selected === 'All'} onClick={() => categorySelected('All')}>All</SelectCategory>
                <SelectCategory selected={selected === 'Frontend'} onClick={() => categorySelected('Frontend')}>Frontend</SelectCategory>
                <SelectCategory selected={selected === 'Backend'} onClick={() => categorySelected('Backend')}>Backend</SelectCategory>
                <SelectCategory selected={selected === 'Others'} onClick={() => categorySelected('Others')}>Others</SelectCategory>
            </CategoryContainer>

            <Tool className="row">
                <AnimatePresence>
                    {skills.filter(e => e.types.SS.includes(selected)).map((elm, index) => {
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
                                <TechnoImage src={elm.src.S} />
                                <TechnoText>{elm.skillName.S}</TechnoText>
                            </motion.div>
                        )
                    })}
                </AnimatePresence>
                

            </Tool>
        </>
    )

}