'use client'

import Image from "next/image";
import dynamic from 'next/dynamic';
const Naverlgn = () => {
    const NaverLogin = dynamic(() => import('../../../component/naverLogin'),{ssr : false})
    return (
        <>
            <NaverLogin />
        </>
    )
}
export default Naverlgn;