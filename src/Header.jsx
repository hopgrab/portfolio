import { Parallax } from 'react-scroll-parallax'
// import original from './assets/original.png'
import background from './assets/background.jpg'
import foreground from './assets/foreground.png'
function Header(){
    return (
        <div className='relative h-screen w-full overflow-hidden bg-black mb-[10%]'>
            <Parallax speed={-15} className='absolute inset-0 z-0 h-full w-full'>
                <img src={background} alt ="full background image" className='h-full w-full object-cover'/>
            </Parallax>
            <Parallax speed={-7} className='absolute pt-[18%] inset-0 z-10 flex h-full w-full flex-col items-center justify-center text-center'>
                <h1 className="text-5xl font-bold text-white drop-shadow-lg md:text-8xl">
                    Be Creative Be Brave
                </h1>
                <p className="mt-4 text-xl text-white/90 drop-shadow-md md:text-4xl">
                    Lets Create Something Extraordinary
                </p>
            </Parallax>
            <Parallax
                speed={10}
                className="absolute inset-0 z-20 h-full w-full pointer-events-none"
            >
                <img
                src={foreground}
                alt="foreground image"
                className="absolute -top-[10%] h-[125%] w-full object-cover"
                />
            </Parallax>
        </div>
    )
}
export default Header