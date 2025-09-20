import Navbar from "../components/Navbar.js";
import RecentProjectPage from "@/pages/RecentProjectPage";
import LandingPage from "@/pages/LandingPage";
import AboutMePage from "@/pages/AboutMePage";

export default function Home() {
  return (
      <>
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
