'use client'
import { styled } from "styled-components";
import Image from "next/image"
import paypalnav from "../../public/paypal/paypalMainheader.png"
import paypal from "../../public/paypal/paypalMain.png"
import paypal1 from "../../public/paypal/paypalMain1-2.png"
import paypal2 from "../../public/paypal/paypalMain2.png"
import paypal3 from "../../public/paypal/paypalMain3.png"

import { useRouter } from 'next/navigation'
export default function Paypal() {
    const PaypalMain = styled.div`
        margin : 0;
        padding : 0%;
        width : 100%;
        display:flex;
        flex-direction : column;
        align-items:center;
        justify-content : center;
        img {
            height : 100%;
            object-fit : contain;
            width : 100%;
            cursor:pointer;
        }
        .text{
            width : 80%;
        }
    `
    const router = useRouter()
    return (
        <>
            <PaypalMain>
                <Image onClick={()=>router.push('/paypal/login')} src={paypalnav} alt={"페이팔 메인페이지입니다."} />
                <Image src={paypal} alt={"페이팔 메인페이지입니다."} />
                <Image className="text" src={paypal1} alt=""></Image>
                <Image src={paypal3} alt=""></Image>
                <Image src={paypal2} alt=""></Image>

            </PaypalMain>
        </>
    )
}
