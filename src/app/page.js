import Head from 'next/head';
import Navbar from "../components/Navbar.js";
import RecentProjectPage from "@/pages/RecentProjectPage";
import LandingPage from "@/pages/LandingPage";
import AboutMePage from "@/pages/AboutMePage";

export default function Home() {
  return (
      <>
          <Head>
              <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap" rel="stylesheet"/>
              <title>Phil's Portfolio</title>
          </Head>
          <main className="flex flex-col h-screen w-full items-center">
              <Navbar/>
              <LandingPage/>
          </main>
          <div className="flex flex-col sm:px-16 w-full transition-all">
              <RecentProjectPage/>
          </div>
          <AboutMePage/>
      </>

  )
}
