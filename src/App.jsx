import './App.css'
import SidePanel from './SidePanel'
import { Skills, Projects, Contact } from './MainContent'
import Services from './Services'
import useIsMobile from './Mobile'
function App() {
const isMobile = useIsMobile();
  return (
    <div className="relative min-h-full max-w-full bg-black">
      <div className="min-h-screen w-full overflow-hidden bg-black">
        {isMobile ? (
          <div className="flex w-full flex-col gap-y-3 px-3 py-4">
            <SidePanel />
            <Skills />
            <Services />
          </div>
        ) : (<div className="flex w-full gap-x-4 px-[5%] py-[5%]">
          <SidePanel />  
          <div className="flex min-w-0 flex-1 flex-col gap-y-3">
            <Skills />
            <Services />
          </div>
        </div>)}
      </div>
      <Projects />
      <Contact />
    </div>
  )
}

export default App