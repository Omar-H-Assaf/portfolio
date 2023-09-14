import styled from 'styled-components'

export const Nav = styled.nav({
    alignItems: "center",
    display: "flex",
    height: "4rem",
    width: "100%",
    justifyContent: 'space-between',
    padding: '2rem',
    position: 'sticky',
    top: 0,
    backgroundColor: (props) => props.scroll === "true" ?'#000': 'transparent',
    zIndex: 9999,
    transition: 'all .2s',
    opacity: '0.7',
    '@media (max-width: 768px)': {
        height: '6rem',
    }

});

export const NavLabelContainer = styled.div({
    display: "flex",
    justifyContent: 'space-between',
    alignItems: "center",
})

export const NavLabel = styled.div({
    margin: '1rem',
    color: '#EBEBEB',
    fontSize: '1.2rem',
    cursor: 'pointer',
    '&:hover': {
        color: '#65d2a3',
    },
    '@media (max-width: 768px)': {
        fontSize: '2.2rem',
    }
    
})

export const LogoContainer = styled.div({
    padding: '1rem',
})

export const Button = styled.div({
    height: '2rem',
    width: '6rem',
    cursor: 'pointer',
    border: 'solid',
    borderColor: '#EBEBEB',
    display: 'flex',
    alignItems: 'center',
    color: '#EBEBEB',
    justifyContent: 'center',
    '&:hover': {
        color: '#65d2a3',
        borderColor: '#65d2a3',
    },
    '@media (max-width: 768px)': {
        fontSize: '2rem',
        height: '4rem',
        width: '8rem',
    }
})

export default function Home1() {
    return <>{/* nothing */}</>;
};