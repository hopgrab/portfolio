import './App.css'
import SidePanel from './SidePanel'
import { Skills, Projects, Contact } from './MainContent'
import Services from './Services'
function App() {

  return (
    <div className="relative min-h-full max-w-full bg-black">
      <div className='flex px-[5%] py-[5%] gap-x-4'>
        <SidePanel />
        <div className='flex flex-1 flex-col gap-y-3'>
          <Skills />
          <Services />
        </div>
      </div>
      <Projects />
      <Contact />
    </div>
  )
}

export default App