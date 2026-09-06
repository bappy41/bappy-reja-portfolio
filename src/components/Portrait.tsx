import { motion } from "framer-motion";
import portrait from "../assets/bappy_portrait.jpg";
export default function Portrait(){
 return <div className="relative max-w-[430px] mx-auto">
  <div className="absolute inset-8 rounded-[2rem] bg-[#4de1ff]/15 blur-[70px]"/>
  <div className="relative p-2 rounded-[2rem] border border-white/10 bg-white/[.035] backdrop-blur-sm">
   <div className="overflow-hidden rounded-[1.5rem] relative">
    <img src={portrait} alt="MD Bappy Reja" className="w-full aspect-[4/5] object-cover object-top"/>
    <div className="absolute inset-0 bg-gradient-to-t from-[#070b12] via-transparent to-transparent opacity-75"/>
    <div className="absolute left-6 right-6 bottom-6 flex justify-between items-end">
      <div><p className="kicker text-[#4de1ff]">Dhaka, Bangladesh</p><p className="display text-2xl mt-1">MD Bappy Reja</p></div>
      <span className="kicker text-white/45 border border-white/15 rounded-lg px-2 py-1">EEE / OPS</span>
    </div>
   </div>
  </div>
  <span className="absolute -top-3 -right-3 w-14 h-14 rounded-full border border-[#b8f36b]/30 bg-[#b8f36b]/10 grid place-items-center text-[#b8f36b] text-xs font-mono">01</span>
 </div>
}
