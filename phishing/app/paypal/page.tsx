'use client'
import { styled } from "styled-components";
import Image from "next/image"
import paypal from "../../public/paypal/paypalMain.png"
import { useRouter } from 'next/navigation'
export default function Paypal() {
    const PaypalMain = styled.div`
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
            <PaypalMain>
                <Image onClick={()=>router.push('/paypal/login')} src={paypal} alt={"페이팔 메인페이지입니다."} />
            </PaypalMain>
        </>
    )
}
