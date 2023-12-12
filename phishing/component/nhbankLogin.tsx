'use client'

import Image from "next/image"
import { styled } from "styled-components";
import nhNav1 from "../public/nhbank/nhbankNav.png"
import nhNav2 from "../public/nhbank/nhbanknav2.png"
import seperator from "../public/nhbank/nhbankseperator.png"
import nhHeader1 from "../public/nhbank/nhloginHeader.png"
import nhTabs from "../public/nhbank/nhbankLoginTabs.png"
import nhFooter from "../public/nhbank/nhbankFooter.png"
import nhFooter1 from "../public/nhbank/nhbankFooter1.png"
import { useRouter } from 'next/navigation'


const NhLogin = () => {
    const router = useRouter()
    const NhLogin = styled.div`
        display : flex;
        justify-content : center;
        align-content:center;
        align-items : center;
        padding : 2% 0 0 0;
        flex-direction : column;
        max-width : 100vw;
        
    `
    const NhLoginBox = styled.div`
        margin-top : 20px;
        width : 100%;
        img{
            width  : 100%;
            height : auto;

        }

    `
        const NhNav = styled.div`
        display : flex;
        justify-content: space-between;
        img{
            max-width : 55%;
            height : auto;
        }
    `
    const NhHeader = styled.div`
        width : 100vw;
        img{
            width : 100%;
            height : auto;
        }
    `

    const NhLoginInner = styled.div`
        width : 100%;
        align-items:center;
        display : flex;
        flex-direction : row;
        margin-top : 1em;
        justify-content: center;
    `
    const NhInput = styled.input`
        width : 10rem;
        margin : 2px;
        height : 1.5rem;
        padding : 3px 20px;
        border : 1px solid #c3c3c3;
        border-radius : 2px;
    `
    const NhInputs = styled.div`
        display : flex;
        flex-direction : column;
    `
    const NhLoginBtn = styled.button`
        height : 4.2rem;
        width : 4.2rem;
        background-color : #046fd9;
        color : white;
        border-radius : 2px;
        border : none;
    `
    return (

        <>
            <NhLogin>
                <NhHeader>
                    <NhNav>
                        <Image src={nhHeader1} alt=""></Image>
                    </NhNav>
                    <Image src={seperator} alt=""></Image>
                </NhHeader>
                
                <NhLoginBox>
                    <Image src={nhTabs} alt=""></Image>

                    <NhLoginInner>
                        <NhInputs>
                            <NhInput placeholder="아이디"></NhInput>
                            <NhInput placeholder="비밀번호"></NhInput>
                        </NhInputs>
                        <NhLoginBtn onClick={()=>router.push('/nhbank')}>로그인</NhLoginBtn>
                    </NhLoginInner>
                    <Image src={nhFooter1} alt=""></Image>
                    <Image src={nhFooter} alt=""></Image>
                </NhLoginBox>
             
            </NhLogin>
        </>
    )
}
export default NhLogin;