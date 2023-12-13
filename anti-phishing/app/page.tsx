import Image from 'next/image'
import Link from 'next/link'
import { styled } from "styled-components";

const MainPage = styled.div`
        margin : 0;
        padding : 0%;
        width : 100%;
        display:flex;
        flex-direction : column;
        align-items:center;
        justify-content : center;
    `
export default function Home() {
  return (
    <MainPage className="flex min-w-screen min-h-screen flex-col items-center justify-center p-24">
      <div className=''>
        <Link href={'/naver'} >Naver</Link>
      </div>
      <div>
        <Link href={'/paypal'} >Paypal</Link>
      </div>
      <div>
        <Link href={'/nhbank'} >NongHyup</Link>
      </div>
    </MainPage>
  )
}
