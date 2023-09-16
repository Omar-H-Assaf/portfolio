import styled from 'styled-components'

export const MainPageContainer = styled.div({
    alignItems: "center",
    height: "35rem",
    width: "100%",
    padding: '4rem',
    '@media (max-width: 768px)': {
        paddingLeft: '3rem',
        paddingRight: '3rem',
        height: '120vh'
    }
});

export const Image = styled.img({
    height: '100%',
    width: '100%',
    border: 'none',
    opacity: 0.5,
    '@media (max-width: 768px)': {
        display: 'none'
    }
});

export const ImageConatiner = styled.div({
    position: 'absolute',
    top: -400,
    right: -900,
    '@media (max-width: 768px)': {
        top: 0,
        right: -750,
    }
})

export const IntroContainer = styled.div({
    width: "80%",
    position: 'absolute',
    height: '100%',
    '@media (max-width: 768px)': {
        width: "100%",
        fontSize: '4rem',
    }
})

export const NameLabelHome = styled.div({
    color: '#EBEBEB',
    fontFamily: 'Andale Mono, monospace',
    fontSize: '3rem',
    paddingBottom: '5rem',
    position: 'absolute',
    zIndex: 90,
    height: '100%',
    '@media (max-width: 768px)': {
        width: "100vh",
        fontSize: '4.5rem',
    }
})

export const NameLabel = styled.div({
    color: '#EBEBEB',
    fontFamily: 'Andale Mono, monospace',
    fontSize: '1.5rem',
    paddingBottom: '2rem',
    fontWeight: 'bold',
    '@media (max-width: 768px)': {
        fontSize: '4.5rem',
    }
})

export const ContentLabel = styled.div({
    color: '#EBEBEB',
    fontFamily: 'Courier, monospace',
    fontSize: '1rem',
    lineHeight: '2rem',
    '@media (max-width: 768px)': {
        fontSize: '3rem',
        paddingTop: '4rem',
        lineHeight: '3rem',
    }
});

export const Title = styled.p({
    fontFamily: 'Andale Mono, monospace',
    color: '#65d2a3',
    fontSize: '2rem',
    paddingBottom: '3rem',
    '@media (max-width: 768px)': {
        fontSize: '4rem',
    }
});
export const Info = styled.p({
    fontFamily: 'Andale Mono, monospace',
    color: '#EBEBEB',
    fontSize: '1.5rem',
    width: '60%',
    paddingBottom: '5rem',
    '@media (max-width: 768px)': {
        width: "100%",
        fontSize: '3rem',
    }
})

export default function Home1() {
    return <>{/* nothing */}</>;
};
