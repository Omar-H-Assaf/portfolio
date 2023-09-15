import { styled } from "styled-components";

export const PopUpContainer = styled.div({

});

export const ExitButton = styled.button`
position: absolute;
    width: 46px;
    height: 46px;
    top: calc(37px);
    left: calc(50% - 23px);
    border-radius: 23px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    transition: all 0.3s ease-out 0s;
    background: rgb(13, 17, 23);
    border: 2px solid rgb(48, 54, 61);
    cursor: pointer
    `;

export const ContentContainer = styled.div({
    display: 'flex',
    marginLeft: '8rem',
    marginRight: '8rem',
    marginTop: '8rem',
    flexDirection: 'column',
});

export const HeadLineContainer = styled.div({
    display: 'flex'
});

export const Header = styled.h2`font-size: 36px;
    font-family: "sans-serif";
    line-height: 48px;
    font-weight: 400;
    color: rgb(240, 242, 248);
    margin-bottom: 8px;`

export const Description = styled.p`font-size: 26px;
    font-family: "sans-serif";
    line-height: 40px;
    letter-spacing: 0.25px;
    font-weight: 400;
    color: rgb(240, 242, 248);
    margin-bottom: 16px;`

export const DescriptionContainer = styled.div({
    display: 'flex',
    flexDirection: 'column'
})

export const Description2 = styled.p`    font-size: 15px;
    font-family: "sans-serif";
    line-height: 26px;
    letter-spacing: 0.5px;
    font-weight: 400;
    color: rgb(240, 242, 248);
    margin-bottom: 16px;`

export const BigContainer = styled.div`    top: 16px;
    
    width: 576px;
    height: 576px;
    overflow: hidden;
    border-radius: 32px;
    background: rgb(13, 17, 23);
    box-shadow: rgb(48, 54, 61) 0px 0px 0px 2px inset;
    user-select: none;`
export const SmallContainer = styled.div`    top: 16px;
    width: 280px;
    height: 280px;
    overflow: hidden;
    border-radius: 32px;
    background: rgb(13, 17, 23);
    box-shadow: rgb(48, 54, 61) 0px 0px 0px 2px inset;
    user-select: none;`

export const MediumContainer = styled.div`    top: 16px;
    
    width: 576px;
    height: 280px;
    overflow: hidden;
    border-radius: 32px;
    background: rgb(13, 17, 23);
    box-shadow: rgb(48, 54, 61) 0px 0px 0px 2px inset;
    user-select: none;`

export const BottomContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '8rem'
});


export const Columncontainer = styled.div({
    display: 'flex',
    flexDirection: 'column',
    gap: 12
});
export const Rowcontainer = styled.div({
    display: 'flex',
    gap: 21
});

export default function Home1() {
    return <>{/* nothing */}</>;
}