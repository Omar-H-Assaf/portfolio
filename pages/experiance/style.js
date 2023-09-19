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
    },
    '@media (max-width: 768px)': {
        fontSize: '2.5rem',
    }
});

export const JobContainer = styled.div({
    fontFamily: 'Andale Mono, monospace',
    fontSize: '1.5rem',
    color: '#333333',
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
        display: 'block'
    }

});

export const JobContent = styled.ul({
    fontFamily: 'Andale Mono, monospace',
    fontSize: '1rem',
    color: '#333333',
    margin: '2rem'
})

export const JobTitle = styled.div({
    fontSize: '1.3rem',
    paddingLeft: '1rem',
    '@media (max-width: 768px)': {
        fontSize: '2rem',
    }
});

export const ExperianceContainer = styled.div({
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingTop: '5rem',
    animation: 'wipe-enter 1s infinite',
    padding: '4rem',
    backgroundColor: '#F1FBF7',
    '@media (max-width: 768px)': {
        paddingLeft: '3rem',
        paddingRight: '3rem',
    }

});

export const ListContent = styled.li({
    paddingBottom: '1rem'
});

export const ImageContainer = styled.div({
    display: 'flex',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const Date = styled.div({
    color: '#333333',
    fontSize: '0.9rem',
    '@media (max-width: 768px)': {
        fontSize: '1.5rem',
        margin: 'auto',
        width: '50%'
    }
});

export const Content = styled.div({
    color: '#333333',
    fontSize: '0.9rem',
    paddingBottom: '2rem',
    marginTop: '2rem',
    cursor: 'default',
    '@media (max-width: 768px)': {
       
        fontSize: '1.9rem',
    }
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
    alignItems: 'center',
    marginLeft: '3rem',
    '@media (max-width: 768px)': {
        height: '18rem',
        width: '18rem',
    }
});

export const CompanyImage = styled.img({
    borderRadius: '10px', boxShadow: 'transparent 0 0 0 2px inset',
    overflow: 'hidden',
    height: '4.125rem',
    width: '4.125rem',
    '@media (max-width: 768px)': {
        height: '10.125rem',
        width: '10.125rem',
        marginBottom: '4rem',
        marginTop: '4rem'
    }
})

export const TechnoImage = styled.img({
    height: '3.125rem',
    width: '3.125rem',
    '@media (max-width: 768px)': {
        height: '7.125rem',
        width: '7.125rem',
        marginBottom: '2rem'
    }
});

export const TechnoText = styled.p({
    marginTop: '1rem',
    '@media (max-width: 768px)': {
        fontSize: '3rem'
    }
})

export const JobDescription = styled.div({
    '@media (max-width: 768px)': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const Tool = styled.div({
    // display: 'flex',
    // justifyContent: 'space-between',
});