import styled from 'styled-components'

export const Nav2Container = styled.nav({
    background: '#080808',
    height: '100vh',
    position: 'sticky',
    top: 0,
    left: 0,
    zIndex: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowY: 'scroll',
    scrollbarWidth: 'none',
})

export const NavHref = styled.a({
    height: '100px',
    flexShrink: 0,
    cursor: 'pointer',
    writingMode: 'vertical-lr',
    fontSize: '1.4rem',
    fontWeight: 200,
    textDecoration: 'none',
    color: '#ebecf3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: .5,
    borderRight: '1px solid transparent',
    transition: 'all .1s',
    width: '100%',
    '&:hover': {
        background: '#111',
        borderRight: '1px solid #0aff9d',
        opacity: 1,
    }
})

export default function Home1() {
    return <>{/* nothing */}</>;
};

