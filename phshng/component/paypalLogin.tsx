'use client'

import Image from "next/image"
import { styled } from "styled-components";
import paypalLan from "../public/paypal/paypalLan.png"
import paypalLogo from "../public/paypal/paypalLogo.png"
import { useRouter } from 'next/navigation'

const PaypalLogin = () => {
    const router = useRouter()

    const PaypalLogin = styled.div`
        display : flex;
        justify-content : center;
        align-content:center;
        align-items : center;
        padding : 2% 20% 0% 20%;
        flex-direction : column;
        
    `
  
    const PaypalLogo = styled.div`
        width : 100%;
        display : flex;
        align-items : center;
        justify-content:center;
        img{
            width : 6em;
            height : auto;
            object-fit:contin;
        }
    `
    const PaypalLoginBox = styled.div`
        margin-top : 20px;
        border : 1px solid #eaeced;
        border-radius : 7px;
        width : 25em;
        padding : 1em;
        margin-top : 3em;
        margin-bottom : 7em;
    `
    
    const PaypalInputId = styled.input`
        width : 100%;
        padding : 20px 10px 0;
        height : 2.5em;
        border : solid #c6c6c6 1px;
        border-radius : 5px;
        ling-height : 14px;
        
    `

    const PaypalLoginInner = styled.div`
        display : flex;
        flex-direction : column;
        align-items:center;
        padding : 2em 3em;
        width : 80%;
        padding-bottom : 0;
        input::placeholder {
            font: 1.1rem sans-serif;
        }
    `
    const LoginSetting = styled.div`
        width : 100%;
        padding : 0 0.5em 0 0.5em;
        display : flex;
        justify-content: space-between;
        color : #1072eb;
        margin-top : 8px;
        margin-bottom : 8px
    `
    const PaypalLoginBtn = styled.div`
        width : 85%;
        cursor : pointer;
        background-color: #142c8e;
        color : white;
        display : flex;
        justify-content:center;
        padding :12px 32px;
        margin-top : 8px;
        margin-bottom : 8px;
        border-radius:20px;
    `
    const PaypalJoinBtn = styled.div`
        width : 85%;
        cursor : pointer;
        color: #142c8e;
        border : solid 1px #142c8e;
        display : flex;
        justify-content:center;
        padding :12px 32px;
        margin-top : 8px;
        margin-bottom : 8px;
        border-radius:20px;
    `
    const PaypalOrLine = styled.div`
        display : flex;
        width : 100%;
        align-items : center;
        margin : 1em 0;
    `
    const PaypalLine = styled.div`
        height : 1px;
        width : 40%;
        background-color :#cbd2d6;
    `
    const PaypalOr = styled.div`
        color : #6c7378;
        margin-left : 1em;
        margin-right : 1em;
        font-size : 80%;
    `
    const PaypalLang = styled.div`
        width : 100%;
        img { 
            width : 100%;
            object-fit:contain;
        }
    `
    return (
        <>
            <PaypalLogin>
                <PaypalLoginBox>
                    <PaypalLogo><Image src={paypalLogo} alt="로고" /></PaypalLogo>
        
                    <PaypalLoginInner>
                        <PaypalInputId type="text" placeholder="이메일 또는 휴대폰 번호"/>
                        <PaypalInputId type="text" placeholder="비밀번호"/>
                        <LoginSetting>
                            <p>이메일 주소를 잊으셨나요?</p>
                        </LoginSetting>
                        <PaypalLoginBtn onClick={()=>router.push('/paypal')}>로그인</PaypalLoginBtn>
                        <PaypalOrLine>
                            <PaypalLine></PaypalLine>
                            <PaypalOr>또는</PaypalOr>
                            <PaypalLine></PaypalLine>
                        </PaypalOrLine>
                        <PaypalJoinBtn>가입하기</PaypalJoinBtn>
                        <PaypalLang>
                            <Image src={paypalLan} alt="페이팔 언어설정" />
                        </PaypalLang>    
                    </PaypalLoginInner>
                </PaypalLoginBox>

                
            </PaypalLogin>
        </>
    )
}
export default PaypalLogin;