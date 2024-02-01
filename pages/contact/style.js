import { styled } from "styled-components";

export const BoxContainer = styled.div({
    backgroundColor: '#2F4858',
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
color: 'rgb(242, 243, 244)',
fontZize: '18px',
fontWeight: '600',
cursor: 'pointer',
    background: 'linear-gradient(to right top, #65d2a3, #3abfb1, #30a9b5, #4592ac, #587b98)'
})

export default function Home1() {
    return <>{/* nothing */}</>;
}