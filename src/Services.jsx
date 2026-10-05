import { useState, useRef, useEffect } from "react";
import { Code2, Server, Database, BrainCircuit, Boxes, ChevronLeft, ChevronRight, Plus } from "lucide-react";

const SERVICES = [
{
name: "Front-end",
icon: Code2,
color: "#6FA8FF",
items: ["JavaScript", "TypeScript", "HTML", "CSS", "React"],
},
{
name: "Back-end",
icon: Server,
color: "#7DD9A0",
items: ["REST", "Strapi", "Node.js"]
},
{
name: "Databases",
icon: Database,
color: "#E8B959",
items: ["MySQL", "SQLite", "MongoDB", "PostgreSQL"],
},
{
name: "AI",
icon: BrainCircuit,
color: "#C792EA",
items: ["Data Scraping", "LLM API Intergration", "Sentiment Analysis"],
},
{
name: "Modeling",
icon: Boxes,
color: "#F27C6E",
items: ["Blender", ],
},
];


function useCardsVisible() {
  const get = () => (window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 3 : 5);
  const [n, setN] = useState(get);
  useEffect(() => {
    const onResize = () => setN(get());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return n;
}

function ServiceCard({ service, active}) {
const Icon = service.icon;
return (
<div
    className="flex h-full w-full flex-col rounded-2xl bg-[#091413] p-6"
    style={{
    border: `1px solid ${active ? service.color : "rgba(255,255,255,0.1)"}`,
    boxShadow: active ? `0 0 0 1px ${service.color}33` : "none",
    }}
>
    <div className="mb-4 flex items-center gap-2.5">
    <div
        className="flex h-10 w-10 items-center justify-center rounded-xl"
        style={{ background: `${service.color}1f` }}
    >
        <Icon size={20} color={service.color} />
    </div>
    <span className="text-lg font-medium text-[#f5f3ee]">{service.name}</span>
    </div>

    <ul className="flex flex-1 flex-col gap-2.5">
    {service.items.map((item, i) => (
        <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-[#c7c5bd]">
        <span style={{ color: service.color }}>&bull;</span>
        <span>{item}</span>
        </li>
    ))}
    </ul>

    <div className="mt-4 flex gap-1.5">

    </div>
</div>
);
}

function CardCarousel() {
const CARDS_VISIBLE = useCardsVisible();
const [services, setServices] = useState(SERVICES);
const len = services.length;
const extended = [
...services.slice(len - CARDS_VISIBLE),
...services,
...services.slice(0, CARDS_VISIBLE),
];
const slideCount = extended.length;
const [index, setIndex] = useState(CARDS_VISIBLE);
const [transitionOn, setTransitionOn] = useState(true);
const [newItem, setNewItem] = useState("");
const skipNextTransitionEnd = useRef(false);

const realIndex = ((index - CARDS_VISIBLE) + len) % len;

const goTo = (nextIndex) => {
setTransitionOn(true);
setIndex(nextIndex);
};

const handleTransitionEnd = () => {
if (index < CARDS_VISIBLE) {
    skipNextTransitionEnd.current = true;
    setTransitionOn(false);
    setIndex(index + len);
} else if (index >= len + CARDS_VISIBLE) {
    skipNextTransitionEnd.current = true;
    setTransitionOn(false);
    setIndex(index - len);
}
};


return (
<div className="mx-auto w-full max-w-7xl">
    <div className="relative flex items-center">
    <button
        onClick={() => goTo(index - 1)}
        aria-label="Previous service"
        className="absolute left-0 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-[#12151f] text-[#f5f3ee]"
    >
        <ChevronLeft size={18} />
    </button>

    <div className="w-full overflow-hidden">
        <div
        onTransitionEnd={handleTransitionEnd}
        className="flex"
        style={{
            width: `${(slideCount * 100) / CARDS_VISIBLE}%`,
            transform: `translateX(-${index * (100 / slideCount)}%)`,
            transition: transitionOn ? "transform 0.35s ease" : "none",
        }}
        >
        {extended.map((service, i) => (
            <div key={i} className="px-3" style={{ width: `${100 / slideCount}%` }}>
            <ServiceCard
                service={service}
                active={i === index}
                newItem={i === index ? newItem : ""}
                onNewItemChange={setNewItem}
            />
            </div>
        ))}
        </div>
    </div>

    <button
        onClick={() => goTo(index + 1)}
        aria-label="Next service"
        className="absolute right-0 z-10 flex h-9 w-9 translate-x-1/2 items-center justify-center rounded-full border border-white/15 bg-[#12151f] text-[#f5f3ee]"
    >
        <ChevronRight size={18} />
    </button>
    </div>

    <div className="mt-6 flex justify-center gap-2">
    {services.map((service, i) => (
        <button
        key={service.name}
        onClick={() => goTo(i + CARDS_VISIBLE)}
        aria-label={`Go to ${service.name}`}
        className="h-2 rounded-full transition-all duration-300"
        style={{
            width: i === realIndex ? "1.25rem" : "0.5rem",
            background: i === realIndex ? service.color : "rgba(255,255,255,0.2)",
        }}
        />
    ))}
    </div>
</div>
);
}

export default function Services() {
return (
<div className="w-full h-full min-w-0 overflow-hidden rounded-xl bg-[#061E29] px-6 py-16">
    <div className="flex max-w-[70%] origin-center items-center gap-5">
    <Code2 className="text-5xl text-white" />
    <h1 className="text-5xl text-white">Services I can provide.</h1>
    </div>
    <div className="mt-14">
    <CardCarousel />
    </div>
</div>
);
}