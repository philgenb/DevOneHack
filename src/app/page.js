import Head from 'next/head';
import LandingPage from "../pages/landingPage.js";
import Navbar from "../components/Navbar.js";
import RecentProjectPage from "../pages/RecentProjectPage";
import AboutMePage from "../pages/AboutMePage";
import RecentProjectPage2 from "@/pages/RecentProjectPage2";

export default function Home() {
  return (
      <>
          <Head>
              <link href="https://api.fontshare.com/v2/css?f[]=satoshi@1,900,700,500,301,701,300,501,401,901,400,2&display=swap" rel="stylesheet"/>
          </Head>
          <main className="flex flex-col h-screen items-center">
              <Navbar/>
              <LandingPage/>
          </main>
          <div className="flex flex-col px-8 sm:px-16 transition-all">
              <RecentProjectPage2/>
          </div>
          <AboutMePage/>
      </>

  )
}
