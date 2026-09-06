import Reveal from "./Reveal"; import SectionHeading from "./SectionHeading"; import {about,profile} from "../data/profile";
export default function About(){return <section id="about" className="section-light py-24 md:py-32">
 <div className="max-w-[1240px] mx-auto px-5 md:px-8"><Reveal><SectionHeading index="01 / About" title="I turn messy operations into systems people can run." intro="My work sits between people, process and technology — building structure where day-to-day complexity needs a reliable operating rhythm."/></Reveal>
 <div className="grid lg:grid-cols-[1fr_.7fr] gap-12">
  <Reveal delay={.05}><div className="space-y-5">{about.paragraphs.map((p,i)=><p key={i} className="text-[#091019]/70 text-base md:text-lg leading-relaxed">{p}</p>)}</div></Reveal>
  <Reveal delay={.1}><div className="grid grid-cols-2 gap-3">{[
   ["03+","Years experience"],["200+","Consumers coordinated"],["1.0","Perfect KPI rating"],["8→15","Team scaling"],["12–13","Employees trained"],["PH→BD","Function transition"]].map(([v,l])=><div key={l} className="rounded-2xl bg-white border border-black/5 p-5"><p className="display text-3xl md:text-4xl">{v}</p><p className="text-xs text-[#091019]/45 mt-2">{l}</p></div>)}</div></Reveal>
 </div></div></section>}
