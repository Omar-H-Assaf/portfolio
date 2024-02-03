import { styled } from "styled-components";

export const BoxContainer = styled.div({
    backgroundColor: '#232323',
    width: '50%',
    borderRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'start',
    padding: '3rem',
    flexDirection: 'column'
});

export const Title = styled.p({
    fontSize: '30px',
    color: 'white'
})

export const Input = styled.input({
    width: '100%',
    backgroundColor: 'transparent',
    border: '1px solid rgb(177, 178, 179)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: 'white',
    marginBottom: '0.7rem'
})

export const TextArea = styled.textarea({
    width: '100%',
    backgroundColor: 'transparent',
    border: '1px solid rgb(177, 178, 179)',
    borderRadius: '12px',
    padding: '12px 16px',
    color: 'white',
    marginBottom: '0.7rem',
    outline: 'none'
})

export const Button = styled.input({
    width: "100%",
    textDecoration: 'none',
    textAlign: 'center',
    padding: '13px 16px',
    marginTop: '2px',
    borderRadius: '12px',
    border: 'none',
    color: '#0aff9d',
    fontZize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    background: 'transparent',
    border: '1px solid #0aff9d',
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
    }
})

export default function Home1() {
    return <>{/* nothing */}</>;
}