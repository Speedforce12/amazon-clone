import Banner from '@/components/Banner'
import Head from 'next/head'
import { useSession } from "next-auth/react";
import Loader from '@/components/Loader';



export default function Home() {

 const { status } = useSession();

 if (status === "loading") {
   return <Loader />;
 }


  return (
    <>
      <Head>
        <title>Amazon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='max-w-[1660px] mx-auto'>
        <Banner/>
      </main>

    </>
  )
}
