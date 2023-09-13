import { styled } from "styled-components";

export const Href = styled.a({
    color: '#EBEBEB',
    cursor: 'pointer',
    textDecoration: 'none',
    '&:hover': {
        color: '#65d2a3',
    }
});

export const JobContainer = styled.div({
    fontFamily: 'Andale Mono, monospace',
    fontSize: '1.5rem',
    color: '#EBEBEB',
    paddingBottom: '2rem',
    cursor: 'default',
    display: 'flex',
    alignItems: 'center',

});

export const JobContent = styled.ul({
    fontFamily: 'Andale Mono, monospace',
    fontSize: '1rem',
    color: '#EBEBEB',
    margin: '2rem'
})

export const JobTitle = styled.div({
    fontSize: '2rem',

});

export const ExperianceContainer = styled.div({
    alignItems: "center",
    height: "100%",
    width: "100%",
    paddingTop: '5rem',
    animation: 'wipe-enter 1s infinite',
    padding: '4rem',
    paddingLeft: '10rem',
    paddingRight: '10rem',
});

export const ListContent = styled.li({
    paddingBottom: '1rem'
})