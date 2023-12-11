'use client'
import { styled } from "styled-components";
import Image from "next/image"
import naver from "../../public/naver/naverMain.png"
import { useRouter } from 'next/navigation'
export default function Naver() {
    const NaverMain = styled.div`
        margin : 0;
        padding : 0%;
        width : 100%;
        img {
            height : 100vh;
            object-fit : scale-down;
            width : 100vw;
            cursor:pointer;
        }
    `
    const router = useRouter()
    return (
        <>
            <NaverMain>
                <Image onClick={()=>router.push('/naver/login')} src={naver} alt={"네이버 메인페이지입니다."} />
            </NaverMain>
        </>
    )
}
