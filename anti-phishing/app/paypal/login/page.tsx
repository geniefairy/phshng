'use client'

import dynamic from 'next/dynamic';
const PaypalLgn = () => {
    const PaypalLogin = dynamic(() => import('../../../component/paypalLogin'),{ssr : false})
    return (
        <>
            <PaypalLogin />
        </>
    )
}
export default PaypalLgn;