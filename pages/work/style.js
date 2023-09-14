import styled from 'styled-components'

export const WorkContainer = styled.div({
    alignItems: "start",
    display: "flex",
    width: "100%",
    justifyContent: 'space-between',
});

export const ProjectConatinerWidth = styled.div({
    height: '17.5rem',
    width: '33rem',
    boxShadow: 'transparent 0 0 0 2px inset',
    overflow: 'hidden',
    borderRadius: '32px',
    backgroundColor: '#65d2a3',
    position: 'relative'
});

export const ProjectConatiner = styled.div({
    width: '17.5rem',
    height: '36rem',
    boxShadow: 'transparent 0 0 0 2px inset',
    overflow: 'hidden',
    borderRadius: '32px',
    backgroundColor: '#65d2a3',
    position: 'relative'

});

export const IconContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F1FBF7',
    height: '2.5rem',
    width: '2.5rem',
    position: 'absolute',
    bottom: 25,
    left: 25,
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'width 0.4s ease-in-out',
    '&:hover': {
        width: '7rem',
    }
});

export const ProjectName = styled.p({
    fontFamily: 'Andale Mono, monospace',
    fontSize: '0.6rem',
    color: '#333333',
    paddingLeft: '1rem',
    transform: 'translateX(-12px) translateZ(0px)',
})

export default function Home1() {
    return <>{/* nothing */}</>;
};