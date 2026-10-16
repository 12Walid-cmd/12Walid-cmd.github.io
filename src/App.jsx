// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App

import Navbar from "./components/layout/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import { useRef } from "react";


function App() {

  const skillsPanel = useRef(null);
const projectsPanel = useRef(null);

function showPanel(panel) {
  panel.current?.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
    inline: "start",
  });
}
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
       <div className="bg-slate-950">
  {/* Clickable navigation */}
  <div className="flex justify-center gap-4 px-6 pt-10">
    <button
      type="button"
      onClick={() => showPanel(skillsPanel)}
      className="rounded-full bg-slate-800 px-6 py-3 text-white hover:bg-slate-700"
    >
      Skills
    </button>

    <button
      type="button"
      onClick={() => showPanel(projectsPanel)}
      className="rounded-full bg-slate-800 px-6 py-3 text-white hover:bg-slate-700"
    >
      Projects
    </button>
  </div>

  {/* Swipeable panels */}
  <div className="flex snap-x snap-mandatory overflow-x-auto">
    <div
      ref={skillsPanel}
      className="w-full min-w-0 shrink-0 snap-start"
    >
      <Skills />
    </div>

    <div
      ref={projectsPanel}
      className="w-full min-w-0 shrink-0 snap-start"
    >
      <Projects />
    </div>
  </div>
</div>
      </main>

      {/* <main
        id="home"
        className="flex min-h-screen items-center justify-center bg-slate-950 px-6 pt-24 text-white"
      >
        <div className="text-center">
          <h1 className="text-5xl font-bold">
            Walid Anael Ekouma Lema
          </h1>

          <p className="mt-4 text-xl text-slate-400">
            Software Developer Portfolio
          </p>
        </div>
      </main> */}
    </> 
  )
}

export default App