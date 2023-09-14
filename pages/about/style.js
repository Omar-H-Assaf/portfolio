import { styled } from "styled-components";

export const AboutContainer = styled.div({
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingTop: '5rem',
    animation: 'wipe-enter 1s infinite',
    backgroundColor: '#F1FBF7',
    padding: '4rem',
    paddingLeft: '10rem',
    paddingRight: '10rem',
    zIndex: 100,
    position: 'relative',
});

export const Aboutcontentcontainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'

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
padding: '2rem'
})