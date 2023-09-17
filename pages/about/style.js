import { styled } from "styled-components";

export const AboutContainer = styled.div({
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingTop: '5rem',
    animation: 'wipe-enter 1s infinite',
    backgroundColor: '#F1FBF7',
    padding: '4rem',
    zIndex: 100,
    position: 'relative',
    '@media (max-width: 768px)': {
        paddingLeft: '3rem',
        paddingRight: '3rem',
    }
});

export const Aboutcontentcontainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 768px)': {
        flexDirection: 'column'
    }
})
export default function Home1() {
    return <>{/* nothing */}</>;
}

export const AboutBorder = styled.div({
    backgroundColor: 'white',
    boxShadow: 'transparent 0 0 0 2px inset',
    overflow: 'hidden',
    borderRadius: '32px',
    width: '100%%',
    padding: '2rem',
    '@media (max-width: 768px)': {
        paddingLeft: '3rem',
        paddingRight: '3rem',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export const AboutImage = styled.img({
    width: '18.75rem',
    height: '16.188rem',
    paddingRight: '3rem',
    '@media (max-width: 768px)': {
        width: '40.75rem',
        height: '40.75rem',
    }
})