import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, MapPin, Zap } from "lucide-react";
import { profile } from "../data/profile";
import Portrait from "./Portrait";

export default function Hero(){
 return <section id="home" className="noise grid-bg relative min-h-screen overflow-hidden bg-[#070b12] text-white">
  <div className="absolute -top-40 -right-32 w-[520px] h-[520px] rounded-full bg-[#4de1ff]/10 blur-[120px]"/>
  <div className="absolute bottom-0 -left-40 w-[420px] h-[420px] rounded-full bg-[#b8f36b]/[.07] blur-[110px]"/>
  <div className="relative max-w-[1240px] mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-20 grid lg:grid-cols-[1.1fr_.9fr] gap-14 items-center min-h-screen">
   <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
    <div className="flex flex-wrap gap-3 items-center mb-7">
      <span className="kicker text-[#4de1ff] border border-[#4de1ff]/20 bg-[#4de1ff]/[.06] rounded-full px-3 py-1.5">Operations × Engineering</span>
      <span className="flex items-center gap-1.5 text-xs text-white/45"><span className="w-1.5 h-1.5 rounded-full bg-[#b8f36b] shadow-[0_0_10px_#b8f36b]"/> Available for opportunities</span>
    </div>
    <h1 className="display text-[clamp(3.4rem,7vw,6.8rem)] leading-[.9] tracking-[-.045em] max-w-5xl">
      Systems thinker.<br/><span className="text-[#4de1ff]">Process builder.</span>
    </h1>
    <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-white/60">{profile.subheadline}</p>
    <div className="mt-9 flex flex-wrap gap-3">
      <a href="#experience" className="inline-flex items-center gap-2 rounded-full bg-[#4de1ff] text-[#061017] font-semibold px-6 py-3.5 hover:translate-y-[-2px] transition focus-ring">Explore my work <ArrowUpRight size={17}/></a>
      <a href="/Bappy_Reja_CV.pdf" download className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 hover:border-white/35 transition focus-ring"><Download size={17}/> CV</a>
    </div>
    <div className="mt-14 flex flex-wrap gap-7 text-sm text-white/45">
      <span className="flex items-center gap-2"><MapPin size={15} className="text-[#4de1ff]"/>{profile.location}</span>
      <span className="flex items-center gap-2"><Zap size={15} className="text-[#b8f36b]"/>3+ years in operations</span>
    </div>
   </motion.div>
   <motion.div initial={{opacity:0,scale:.94}} animate={{opacity:1,scale:1}} transition={{duration:.8,delay:.15}} className="relative">
    <Portrait/>
    <div className="absolute -bottom-5 -left-5 md:-left-10 card rounded-2xl px-5 py-4 backdrop-blur-xl">
      <p className="kicker text-white/35 mb-1">Current focus</p><p className="font-medium">Leading • Standardizing • Training</p>
    </div>
   </motion.div>
  </div>
  <a href="#about" className="absolute bottom-7 left-1/2 -translate-x-1/2 text-white/30 hover:text-[#4de1ff] transition"><ArrowDown size={18} className="animate-bounce"/></a>
 </section>
}
