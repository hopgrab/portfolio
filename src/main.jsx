import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ParallaxProvider } from 'react-scroll-parallax'
import './index.css'
import App from './App.jsx'
import Header from './Header.jsx'
import { AboutMe } from './MainContent.jsx'

createRoot(document.getElementById('root')).render(
  <div className='bg-black'>
    <StrictMode>
      <ParallaxProvider>
        <div className='bg-black pb-10'>
          <Header />
          <AboutMe />
          <App />
        </div>
      </ParallaxProvider>
    </StrictMode>,
  </div>
)
