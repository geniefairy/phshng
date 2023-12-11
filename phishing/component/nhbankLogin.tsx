'use client'

import Image from "next/image"
import { styled } from "styled-components";
import nhNav1 from "../public/nhbank/nhbankNav.png"
import nhNav2 from "../public/nhbank/nhbanknav2.png"
import seperator from "../public/nhbank/nhbankseperator.png"

import naverLang from "../public/naver/naverLoginLan.png"
import naverLogo from "../public/naver/naverLogo.png"
import naverLoginBtn from "../public/naver/NaverLoginBtn.png"
import naverFooter from "../public/naver/NaverFooter.png"

const NaverLogin = () => {
    const NaverLogin = styled.div`
        display : flex;
        justify-content : center;
        align-content:center;
        align-items : center;
        padding : 2% 20% 0% 20%;
        flex-direction : column;
        
    `
    const NhLoginBox = styled.div`
        margin-top : 20px;
        border : 1px solid #c6c6c6;
        border-radius : 7px;
        width : 30em;
    `
    const NaverTab = styled.div`
        display:flex;
        width : 100%;
        background-color : #e3e3e3;
        border-radius : 7px 7px 0 0;
        
        p{
            background-color : white;
            width : 33.3%;
            padding:10px 0;
            margin:0;
            height : 100%;
            text-align : center;
            border-style: solid;
            border-color: #c6c6c6;
            border-width :0 1px 1px 0;
            border-radius : 7px 7px 0 0;
            min-height : 2em;
            display : flex;
            justify-content: center;
            align-items : center;
            cursor : pointer;
        }
        div{
            color : #777777;
            width : 33.3%;
            padding:10px 0;
            margin:0;
            height : 100%;
            text-align : center;
            border-style: solid;
            border-color: #c6c6c6;
            border-width :0 1px 1px 0;
            border-radius : 0 7px 0 0;
            min-height : 2em;
            display : flex;
            justify-content: center;
            align-items : center;
            cursor : pointer;
        }
    `
    const NaverInputId = styled.input`
        width : 100%;
        padding : 0.5em;
        height : 2.5em;
        border : solid #c6c6c6 1px;
        border-radius : 10px 10px 0 0;
    `
    const NaverInputPwd = styled.input`
        width : 100%;
        padding : 0.5em;
        height : 2.5em;
        border : solid #c6c6c6 1px;
        border-width : 0 1px 1px 1px;
        border-radius : 0 0 10px 10px;
    `
    const NaverInputBox = styled.div`
        
        display : flex;
        flex-direction : column;
        align-items:center;    
        width : 100%;
        object-fit : contain;
    `
    const NaverLoginInner = styled.div`
        display : flex;
        flex-direction : column;
        align-items:center;
        padding : 2em 3em;
        width : 80%;
    `
    const LoginSetting = styled.div`
        width : 100%;
        padding : 0 0.5em 0 0.5em;
        display : flex;
        font-size : 14px;
        justify-content: space-between;
    `
    const NaverLoginBtnDiv = styled.div`
        max-width : 100%;
        cursor : pointer;
        img {
            object-fit : contain;
            max-width : 100%;
            height : 3em;
        } 
    `
    const NaverSearch = styled.div`
        display : flex;
        font-size : 14px;
        width : 20em;
        justify-content: space-between;
        color: #c6c6c6;
        align-items: center;
        p {
            cursor : pointer;
        }
    `
    const NaverFooterBox = styled.div`
        width : 30em;
        img {
            object-fit : contain;
            max-width : 100%;
            height : 8em;
        }
        `
        const NhNav = styled.div`
        display : flex;
        justify-content: space-between;
        img{
            max-width : 50%;
        }
        div{
            width : 50%;
            padding-left : 16%;
            color:#046fd9;
            font-weight: 500;
            font-family: 'Noto Sans KR',sans-serif;
            font-size : 20px;
            line-height : 26px;
            margin-top : 9px;
        }
    `
    const NhHeader = styled.div`
        width : 100vw;
        img{
            width : 100%;
            height : auto;
        }
    `
    const NhTabs = styled.div`
    `
    const NhLoginTitle = styled.div`
    `
    const NhTab = styled.div`
    `
    return (

        <>
            <NaverLogin>
                <NhHeader>
                    <Image src={nhNav1} alt=""></Image>
                    <NhNav>
                        <NhLoginTitle>로그인</NhLoginTitle>
                        <Image src={nhNav2} alt=""></Image>
                    </NhNav>
                    <Image src={seperator} alt=""></Image>
                </NhHeader>
                
                <NhLoginBox>
                    <NhTabs>

                        
                        <NhTab>인증서 로그인</NhTab>
                        <NhTab>스마트 로그인</NhTab>
                        <NhTab>ID/ 비밀번호</NhTab>
                    </NhTabs>

                    {/* <NaverLoginInner>
                        <NaverInputBox>
                            <NaverInputId type="text" placeholder="아이디"/>
                            <NaverInputPwd type="text" placeholder="비밀번호"/>
                        </NaverInputBox>
                        <LoginSetting>
                            <p>로그인 상태 유지</p>
                            <p>IP보안</p>
                        </LoginSetting>
                        <NaverLoginBtnDiv>
                            <Image src={naverLoginBtn} alt="로그인 버튼"/>
                        </NaverLoginBtnDiv>
                    </NaverLoginInner> */}
                </NhLoginBox>
             
            </NaverLogin>
        </>
    )
}
export default NaverLogin;