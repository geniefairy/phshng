'use client'

import Image from "next/image";
import dynamic from 'next/dynamic';
const NhbankLgn = () => {
    const NhbankLgn = dynamic(() => import('../../../component/nhbankLogin'),{ssr : false})
    return (
        <>
            <NhbankLgn />
        </>
    )
}
export default NhbankLgn;