import styled from 'styled-components'

export const MainPageContainer = styled.div({
    alignItems: "center",
    height: "35rem",
    width: "100%",
    padding: '4rem',
    paddingLeft: '10rem',
    paddingRight: '10rem',
    '@media (max-width: 768px)': {
        paddingLeft: '3rem',
        paddingRight: '3rem',
    }
});

export const Image = styled.img({
    height: '100%',
    width: '100%',
    border: 'none',
    opacity: 0.7

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
    '@media (max-width: 768px)': {
        width: "100vh",
        fontSize: '4rem',
    }
})

export const NameLabel = styled.div({
    color: '#EBEBEB',
    fontFamily: 'Andale Mono, monospace',
    fontSize: '1.5rem',
    paddingBottom: '2rem',
    fontWeight: 'bold'
})

export const ContentLabel = styled.div({
    color: '#EBEBEB',
    fontFamily: 'Andale Mono, monospace',
    fontSize: '1rem',
    lineHeight: '2rem',
    '@media (max-width: 768px)': {
        fontSize: '2rem',
        paddingTop: '2rem'
    }
});

export const Title = styled.p({
    fontFamily: 'Andale Mono, monospace',
    color: '#65d2a3',
    fontSize: '2rem',
    paddingBottom: '3rem'
});
export const Info = styled.p({
    fontFamily: 'Andale Mono, monospace',
    color: '#EBEBEB',
    fontSize: '1.5rem',
    width: '60%',
    paddingBottom: '5rem',
    '@media (max-width: 768px)': {
        width: "100%",
    }
})

export default function Home1() {
    return <>{/* nothing */}</>;
};
