import { styled } from "styled-components";

export const PopUpContainer = styled.div({
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        width: '100vh'
    }
});

export const ExitButton = styled.button({
    position: 'absolute',
    width: '46px',
    height: '46px',
    top: 'calc(37px)',
    left: 'calc(50% - 23px)',
    borderRadius: '23px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease-out 0s',
    background: 'rgb(13, 17, 23)',
    border: '2px solid rgb(48, 54, 61)',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
        left: 'unset'
    }

});

export const ContentContainer = styled.div({
    display: 'flex',
    marginLeft: '8rem',
    marginRight: '8rem',
    marginTop: '8rem',
    flexDirection: 'column',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export const HeadLineContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        marginTop: '2rem'
    }
});

export const Header = styled.h2({
    fontSize: '36px',
    fontFamily: "sans-serif",
    lineHeight: '48px',
    fontWeight: '400',
    color: 'rgb(240, 242, 248)',
    marginBottom: '8px',
    '@media (max-width: 768px)': {
        fontSize: '3rem',
    }
});


export const Description = styled.p({
    fontSize: '20px',
    fontFamily: "sans-serif",
    lineHeight: '40px',
    letterSpacing: '0.25px',
    fontWeight: '400',
    color: 'rgb(240, 242, 248)',
    marginBottom: '16px',
    width: '45%',
    '@media (max-width: 768px)': {
        fontSize: '2rem',
        width: '100%'
    }
})

export const DescriptionContainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
})

export const Description2 = styled.p({
    fontSize: '15px',
    fontFamily: "sans-serif",
    letterSpacing: '0.5px',
    fontWeight: '400',
    color: 'rgb(240, 242, 248)',
    marginBottom: '16px',
    opacity: '0.8',
    width: '45%',
    '@media (max-width: 768px)': {
        fontSize: '2rem',
        width: '100%',
    }
});

export const HrefGitHub = styled.a({
    fontSize: '15px',
    fontFamily: "sans-serif",
    letterSpacing: '0.5px',
    fontWeight: '400',
    color: 'rgb(240, 242, 248)',
    marginBottom: '16px',
    opacity: '0.8',
    width: '45%',
    textDecoration: 'none',
    '&:hover': {
        color: '#65d2a3',
    },
    '@media (max-width: 768px)': {
        fontSize: '2rem',
    }
});

export const BigContainer = styled.div({
    top: '16px',
    width: '576px',
    height: '576px',
    overflow: 'hidden',
    borderRadius: '32px',
    background: 'rgb(13, 17, 23)',
    boxShadow: 'rgb(48, 54, 61) 0px 0px 0px 2px inset',
    userSelect: 'none',
    '@media (max-width: 768px)': {
        width: '100%',
        marginBottom: '1rem',
        height: '100%'
    }
});


export const SmallContainer = styled.div({
    top: '16px',
    width: '280px',
    height: '280px',
    overflow: 'hidden',
    borderRadius: '32px',
    background: 'rgb(13, 17, 23)',
    boxShadow: 'rgb(48, 54, 61) 0px 0px 0px 2px inset',
    userSelect: 'none',
    '@media (max-width: 768px)': {
        width: '100%',
        height: '100%'
    }
});


export const MediumContainer = styled.div({
    top: '16px',
    width: '576px',
    height: '280px',
    overflow: 'hidden',
    borderRadius: '32px',
    background: 'rgb(13, 17, 23)',
    boxshadow: 'rgb(48, 54, 61) 0px 0px 0px 2px inset',
    userSelect: 'none',
    '@media (max-width: 768px)': {
        height: '100%'
    }
});

export const BottomContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '8rem',
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});


export const Columncontainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: 12,


});
export const Rowcontainer = styled.div({
    display: 'flex',
    gap: 21,
    '@media (max-width: 768px)': {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export const ImageFit = styled.img({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'left'

});

export default function Home1() {
    return <>{/* nothing */}</>;
}