import styled from 'styled-components'

export const WorkContainer = styled.div({
    alignItems: "center",
    display: "flex",
    width: "100%",
    justifyContent: 'space-between',
});

export const WorkBox = styled.div({
    border: 'solid',
    borderColor: '#333333',
    height: '20rem',
    width: '45%',
    display: 'flex',
    justifyContent: 'center',
    color: '#333333',
    fontFamily: 'Andale Mono, monospace',
    cursor: 'default',
    '&:hover': {
        backgroundColor: '#000',
        color: '#EBEBEB'
    }
});

export const WorkTitle = styled.p({
    fontSize: '2rem',
});

export const WorkContent = styled.p({
    fontSize: '1.4rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
});

export const ViewImageButton = styled.div({
    backgroundColor: '#EBEBEB',
    color: '#333333',
    width: '10rem',
    height: '2.5rem',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    cursor: 'pointer',
    '&:hover' : {
        backgroundColor: '#65d2a3',
        color: '#EBEBEB'
    }
});
