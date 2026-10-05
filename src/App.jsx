import './App.css'
import SidePanel from './SidePanel'
import { Skills, Projects, Contact } from './MainContent'
import Services from './Services'
function App() {

  return (
    <div className="relative min-h-full max-w-full bg-black">
      <div className="min-h-screen w-full overflow-x-hidden bg-black">{/* your page background */}
        <div className="flex w-full gap-x-4 px-[5%] py-[5%]">
          <SidePanel />  {/* give it shrink-0 and a fixed or max width */}
          <div className="flex min-w-0 flex-1 flex-col gap-y-3">
            <Skills />
            <Services />
          </div>
        </div>
    </div>
      <Projects />
      <Contact />
    </div>
  )
}

export default App