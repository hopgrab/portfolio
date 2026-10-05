import { useState, useEffect} from "react";
import {
  SiC,
  SiSharp,
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiHtml5,
  SiMysql,
  SiSqlite,
  SiStrapi,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import GlitchText from "./backgrounds/GlitchText";
const emailAPI = import.meta.env.EMAIL_API_KEY

const line1 = "Hi my name is";
const line2 = "JOSEPH";
const line3 = "I am a graduate of Computer Science from Mapua University, " + 
"I currently do not have any experience working but I am comfortable working" + 
" on websites or programs frontend or backend.";

const skills = [
  {
    name: "C",
    icon: SiC,
    gradient: "from-blue-400 to-cyan-300",
  },
  {
    name: "C#",
    icon: SiSharp,
    gradient: "from-purple-500 to-pink-400",
  },
  {
    name: "C++",
    icon: SiCplusplus,
    gradient: "from-blue-500 to-indigo-400",
  },
  {
    name: "Python",
    icon: SiPython,
    gradient: "from-yellow-300 to-blue-400",
  },
  {
    name: "Java",
    icon: FaJava,
    gradient: "from-red-500 to-orange-400",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    gradient: "from-yellow-300 to-orange-400",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    gradient: "from-orange-500 to-red-400",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    gradient: "from-blue-400 to-orange-300",
  },
  {
    name: "SQLite",
    icon: SiSqlite,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "Strapi",
    icon: SiStrapi,
    gradient: "from-purple-400 to-indigo-400",
  },
];

function useTypewriter(text, speed = 80, startDelay = 0) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return displayed;
}

function AboutMe() {
  const typedLine1 = useTypewriter(line1, 60, 0);
  const typedLine2 = useTypewriter(line2, 100, line1.length * 60 + 200);
  const typedLine3 = useTypewriter(
    line3,
    50,
    line1.length * 60 + 200 + line2.length * 100 + 400
  );

  return (
    <div className="flex items-center justify-center">
      <style>{`
        @keyframes bounceText {
          0%, 100% { transform: translateY(0); }
          20% { transform: translateY(-14px); }
          40% { transform: translateY(0); }
          60% { transform: translateY(-7px); }
          80% { transform: translateY(0); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .glitch.name {
          font-size: inherit !important;
          margin: 0 !important;
          display: inline-block !important;
          line-height: 1 !important;
        }
        .cursor {
          display: inline-block;
          width: 3px;
          background: currentColor;
          margin-left: 4px;
          animation: blink 0.8s steps(1) infinite;
        }
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>

      <div className="bg-linear-to-b from-[#061E29] to-black h-[70%] w-[90%] rounded-xl p-10">
        <div className="flex py-4 items-center">
          <h1 className="text-white text-5xl font-bold whitespace-nowrap">
            {typedLine1}
            {typedLine1.length < line1.length && (
              <span className="cursor h-10" />
            )}
          </h1>
          &ensp;
          <h1 className="text-[#EFECE3] text-5xl font-extrabold flex items-center">
            <GlitchText
              speed={1}
              enableOnHover={true}
              className="name"
            >
              {typedLine2}
            </GlitchText>
            {typedLine2.length > 0 && typedLine2.length < line2.length && (
              <span className="cursor h-10" />
            )}
          </h1>
        </div>

        <h2 className="text-white text-4xl font-medium text-justify">
          {typedLine3}
          {typedLine3.length > 0 && typedLine3.length < line3.length && (
            <span className="cursor h-10" />
          )}
        </h2>
      </div>
    </div>
  );
}

function Skills() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const skill = skills[index];
  const Icon = skill.icon;

  return (
    <div className="min-w-[70%] h-[30%] rounded-xl bg-[#061E29] p-10">
        <style>
            {`
            @keyframes flip-in {
                0% { transform: rotateX(90deg); opacity: 0; }
                100% { transform: rotateX(0deg); opacity: 1; }
            }
            .animate-flip {
                animation: flip-in 0.6s ease-out forwards;
            }
            `}
        </style>

        <h1 className="mb-2 pb-3 text-5xl font-semibold text-white">
            Has experience working with
        </h1>

        {/* Flip container */}
        <div className="h-[80px]" style={{ perspective: "1000px" }}>
            <div
            key={index}
            className="animate-flip flex h-full origin-center items-center gap-5"
            >
            {/* Icon */}
                <Icon
                    className={`text-6xl text-white`}
                />

            <span
                className={`bg-gradient-to-r ${skill.gradient} bg-clip-text text-5xl font-bold text-transparent`}
            >
                {skill.name}
            </span>
            </div>
        </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "Order Tracking App",
      role: "Full Stack Developer",
      description:
        "A mobile application that tracks and manages orders, with record creation capability. Utilizes a local database alongside analysis using OpenAI LLM",
      link: "https://github.com/KevinKatx/OrderTracking_APP",
    },
    {
      title: "Library System",
      role: "Full Stack Developer",
      description:
        "Library based system hosted on the web which allows users to look up available books of the library. Created using ReactJS and Supabase for backend.",
      link: "https://github.com/hopgrab/librarysystem",
    },
  ];

  const VB_W = 1200;
  const VB_H = 300;

  function makeSmoothPath(baseline, amp, humps) {
    const segments = humps * 2;
    const segWidth = VB_W / segments;
    let d = `M0,${baseline} `;
    for (let i = 0; i < segments; i++) {
      const x1 = segWidth * i + segWidth / 2;
      const y1 = i % 2 === 0 ? baseline - amp : baseline + amp;
      const x2 = segWidth * (i + 1);
      d += `C${x1},${y1} ${x1},${y1} ${x2},${baseline} `;
    }
    d += `L${VB_W},${VB_H} L0,${VB_H} Z`;
    return d;
  }

  const waveLayers = [
    {
      color: "#092328",
      duration: "40s",
      path: makeSmoothPath(32, 4, 5),
    },
    {
      color: "#0b3532",
      duration: "35s",
      path: makeSmoothPath(64, 8, 5),
    },
    {
      color: "#124743",
      duration: "30s",
      path: makeSmoothPath(96, 12, 4),
    },
    {
      color: "#214148",
      duration: "26s",
      path: makeSmoothPath(128, 16, 4),
    },
    {
      color: "#12544f",
      duration: "22s",
      path: makeSmoothPath(162, 20, 3),
    },
    {
      color: "#2d555d",
      duration: "18s",
      path: makeSmoothPath(198, 24, 3),
    },
    {
      color: "#1d756e",
      duration: "14s",
      path: makeSmoothPath(235, 28, 2),
    },
    {
      color: "#378f89",
      duration: "11s",
      path: makeSmoothPath(268, 26, 2),
    },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center py-[3%]">
      <div className="relative bg-black w-[90%] h-[80%] rounded-xl p-[5%] overflow-hidden">
        <style>{`
          @keyframes waveScroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .wave-track {
            position: absolute;
            top: 0;
            left: 0;
            width: 200%;
            height: 100%;
            display: flex;
            will-change: transform;
            animation-name: waveScroll;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
          .wave-track svg {
            width: 50%;
            height: 100%;
            flex-shrink: 0;
            display: block;
          }
        `}</style>

        <div className="absolute inset-0 z-0">
          {waveLayers.map((wave, i) => (
            <div
              key={i}
              className="wave-track"
              style={{ animationDuration: wave.duration }}
            >
              {[0, 1].map((copy) => (
                <svg
                  key={copy}
                  viewBox={`0 0 ${VB_W} ${VB_H}`}
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d={wave.path} fill={wave.color} />
                </svg>
              ))}
            </div>
          ))}
        </div>

        <div className="relative z-10">
          <h1 className="text-white text-5xl font-bold mb-[5%]">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[3%] w-full h-[80%]">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#12544F] w-full h-full rounded-xl p-[6%] flex flex-col justify-between"
              >
                <div className="space-y-10">
                  <h2 className="text-[#EFECE3] text-3xl font-extrabold mb-[4%]">
                    {project.title}
                  </h2>
                  <p className="text-[#89D7B7] text-lg font-medium mb-[6%]">
                    {project.role}
                  </p>
                  <p className="text-white text-base font-normal leading-relaxed">
                    {project.description}
                  </p>
                  
                  <a href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-xl px-4 py-2 text-white flex items-center gap-2 w-fit"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                      <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385 0.6 0.113 0.82-0.258 0.82-0.577 0-0.285-0.01-1.04-0.015-2.04-3.338 0.724-4.042-1.61-4.042-1.61-0.546-1.385-1.333-1.754-1.333-1.754-1.089-0.744 0.083-0.729 0.083-0.729 1.205 0.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492 0.997 0.108-0.775 0.418-1.305 0.762-1.605-2.665-0.3-5.466-1.332-5.466-5.93 0-1.31 0.469-2.381 1.236-3.221-0.124-0.303-0.536-1.524 0.117-3.176 0 0 1.008-0.322 3.301 1.23 0.957-0.266 1.983-0.399 3.003-0.404 1.02 0.005 2.047 0.138 3.006 0.404 2.29-1.553 3.297-1.23 3.297-1.23 0.655 1.653 0.243 2.874 0.119 3.176 0.77 0.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.625-5.479 5.921 0.43 0.372 0.814 1.103 0.814 2.222 0 1.606-0.014 2.898-0.014 3.293 0 0.322 0.216 0.694 0.824 0.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  const [result, setResult] = useState("");

  useEffect(()=>{
    if (!result) return;

    const timer = setTimeout(() => {
      setResult("");
    }, 2000);

    return () => clearTimeout(timer);
  }, [result]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", emailAPI);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  const columns = [
    { xPercent: 8, offset: 0, size: 22 },
    { xPercent: 27, offset: 0.5, size: 16 },
    { xPercent: 46, offset: 0, size: 22 },
    { xPercent: 65, offset: 0.5, size: 16 },
    { xPercent: 84, offset: 0, size: 22 },
  ];
  const rows = 6;
  const rowSpacing = 100 / rows;

  const crosses = [];
  columns.forEach((col, colIndex) => {
    for (let r = 0; r < rows; r++) {
      const topPercent = (r + col.offset) * rowSpacing;
      if (topPercent > 100) continue;
      crosses.push({
        key: `${colIndex}-${r}`,
        left: col.xPercent,
        top: topPercent,
        size: col.size,
        duration: 6 + ((colIndex + r) % 5) * 1.5,
        delay: ((colIndex * 2 + r) % 6) * 0.4,
      });
    }
  });

  return (
    <div className="w-full h-full flex items-center justify-center py-[3%]">
      <div className="relative bg-[#1D756E] w-[90%] h-[80%] rounded-xl p-[5%] overflow-hidden">
        <style>{`
          @keyframes spinCross {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .cross {
            position: absolute;
            transform-origin: center;
            animation-name: spinCross;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
        `}</style>

        <div className="absolute inset-0 z-0">
          {crosses.map((c) => (
            <svg
              key={c.key}
              className="cross"
              viewBox="0 0 24 24"
              style={{
                left: `${c.left}%`,
                top: `${c.top}%`,
                width: c.size,
                height: c.size,
                marginLeft: -c.size / 2,
                marginTop: -c.size / 2,
                animationDuration: `${c.duration}s`,
                animationDelay: `${c.delay}s`,
              }}
              aria-hidden="true"
            >
              <path
                d="M10 0h4v10h10v4h-10v10h-4v-10h-10v-4h10z"
                fill="#0B3532"
              />
            </svg>
          ))}
        </div>

        <div className="relative z-10 max-w-xl mx-auto">
          <h1 className="text-white text-5xl font-bold mb-[5%]">Contact Me</h1>

          <form onSubmit={onSubmit} className="flex flex-col gap-4 place-content-center">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="bg-white/90 rounded-lg px-4 py-3 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="bg-white/90 rounded-lg px-4 py-3 outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              rows={5}
              className="bg-white/90 rounded-lg px-4 py-3 outline-none resize-none"
            />
            <button
              type="submit"
              className="bg-[#0B3532] hover:bg-[#092328] transition-colors text-white rounded-lg px-4 py-3 w-fit"
            >
              Send message
            </button>
            {result && <p className="text-white">{result}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export { Skills, Projects, AboutMe, Contact };