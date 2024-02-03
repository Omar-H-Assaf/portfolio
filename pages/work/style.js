import styled from 'styled-components'

export const WorkContainer = styled.div({
    alignItems: "start",
    display: "flex",
    width: "100%",
    justifyContent: 'space-between',
    overflow: 'hidden',
    gap: '60px',
    borderRadius: '32px',
    padding: '2rem',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const SomeProjectconatiner = styled.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
});

export const ProjectConatinerWidth = styled.div({
    height: '17.5rem',
    width: '17.5rem',
    boxShadow: 'transparent 0 0 0 2px inset',
    overflow: 'hidden',
    backgroundColor: (props) => props.color,
    borderRadius: '32px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 768px)': {
        width: '100%',
        height: '36rem ',
        marginBottom: '2rem'
    }
});

export const ImageWidth = styled.img({
    width: '50%',
    height: '50%',
});

export const ProjectConatiner = styled.div({
    width: '25%',
    height: '36rem',
    boxShadow: 'transparent 0 0 0 2px inset',
    overflow: 'hidden',
    borderRadius: '32px',
    backgroundColor: '#65d2a3',
    position: 'relative',
    '@media (max-width: 768px)': {
        width: '100%',
        height: '36rem ',
        marginBottom: '2rem'
    }
});

export const IconContainer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#F1FBF7',
    height: '15%',
    width: '15%',
    position: 'absolute',
    bottom: 25,
    left: 25,
    borderRadius: '18px',
    cursor: 'pointer',
    transition: 'width 0.4s ease-in-out',
});

export const ProjectName = styled.p({
    fontSize: '0.6rem',
    color: '#333333',
    paddingLeft: '1rem',
    transform: 'translateX(-12px) translateZ(0px)',
})

export const ArrowImage = styled.img({
    width: '35%',
    height: '35%',
})
export default function Home1() {
    return <>{/* nothing */}</>;
};