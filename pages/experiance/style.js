import { styled } from "styled-components";

export default function Home1() {
    return <>{/* nothing */}</>;
}

export const Href = styled.a({
    color: '#333333',
    cursor: 'pointer',
    textDecoration: 'none',
    fontSize: '0.9rem',
    paddingLeft: '1rem',
    '&:hover': {
        color: '#65d2a3',
    }
});

export const JobContainer = styled.div({
    fontFamily: 'Andale Mono, monospace',
    fontSize: '1.5rem',
    color: '#333333',
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'

});

export const JobContent = styled.ul({
    fontFamily: 'Andale Mono, monospace',
    fontSize: '1rem',
    color: '#333333',
    margin: '2rem'
})

export const JobTitle = styled.div({
    fontSize: '1.3rem',
    paddingLeft: '1rem'

});

export const ExperianceContainer = styled.div({
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingTop: '5rem',
    animation: 'wipe-enter 1s infinite',
    padding: '0rem',
    paddingLeft: '10rem',
    paddingRight: '10rem',
    backgroundColor: '#F1FBF7',
});

export const ListContent = styled.li({
    paddingBottom: '1rem'
});

export const ImageContainer = styled.div({
    display: 'flex'
});

export const Date = styled.div({
    color: '#333333',
    fontSize: '0.9rem',
});

export const Content = styled.p({
    color: '#333333',
    fontSize: '0.9rem',
    paddingBottom: '2rem',
});

export const SocialContainer = styled.div({
    display: 'flex',
    gap: 20,
    paddingBottom: '3rem'
});

export const ToolContainer = styled.div({
    display: 'flex',
    height: '8rem',
    width: '8rem',
    borderRadius: '32px',
    boxShadow: '1px 1px 2px #000000',
    marginBottom: '3rem',
    justifyContent: 'center',
    padding: '1rem',
    flexDirection: 'column',
    alignItems: 'center'
});

export const Tool = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
});