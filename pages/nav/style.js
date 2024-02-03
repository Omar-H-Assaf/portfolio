import styled from 'styled-components'

export const Header = styled.header({
    height: '4rem',
    padding: '3.6rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'sticky',
    top: 0,
    zIndex: 99999,
    background: 'hsla(0,0%,7%,.25)',
    backdropFilter: 'blur(12px)',
    fontSize: '2.2rem',
    fontWeight: 700,
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

    fontSize: '0.9rem',
    cursor: 'pointer',
    border: 'solid',
    borderColor: '#0aff9d',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    color: '#0aff9d',
    padding: '1.2rem 2.4rem',
    justifyContent: 'center',
    transition: 'background-color 0.3s ease',
    '&:before': {
        transform: 'scaleX(0)',
        transition: 'transform 0.3s ease',
    },
    '&:hover': {
        background: '#0aff9d',
        color: '#111',
        '&:before': {
            transform: 'scaleX(1)',
        },
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