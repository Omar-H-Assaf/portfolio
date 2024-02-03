import { styled } from "styled-components";

export const AboutContainer = styled.div({
    alignItems: "center",
    width: "100%",
    display: 'flex',
    flexDirection: 'column',
    animation: 'wipe-enter 1s infinite',
    padding: '9.6rem',
    paddingTop: '0px',
    zIndex: 100,
    position: 'relative',
    '@media (max-width: 768px)': {
        paddingLeft: '3rem',
        paddingRight: '3rem',
    }
});

//#2F4858 //#2C6274 #237E8B

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
    // backgroundColor: 'white',
    // boxShadow: 'transparent 0 0 0 2px inset',
    overflow: 'hidden',
    borderRadius: '32px',
    width: '100%%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',

    padding: '2rem',
    '@media (max-width: 768px)': {
        paddingLeft: '3rem',
        paddingRight: '3rem',
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