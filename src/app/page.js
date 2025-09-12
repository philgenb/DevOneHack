import Head from 'next/head';
import LandingPage from "../pages/landingPage.js";
import Navbar from "../components/Navbar.js";
import AboutMePage from "../pages/AboutMePage";
import RecentProjectPage from "@/pages/RecentProjectPage";

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
