import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links=[["#about","About"],["#experience","Experience"],["#skills","Skills"],["#projects","Projects"],["#contact","Contact"]];

export default function Navbar(){
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const f=()=>setScrolled(scrollY>24);addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);
 return <header className={`fixed inset-x-0 top-0 z-50 transition-all ${scrolled?"bg-[#070b12]/80 backdrop-blur-xl border-b border-white/10":"bg-transparent"}`}>
  <nav className="max-w-[1240px] mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">
   <a href="#home" className="focus-ring flex items-center gap-3">
    <span className="grid place-items-center w-9 h-9 rounded-xl border border-cyan/30 bg-cyan/10 text-[#4de1ff] font-mono text-xs">BR</span>
    <span className="font-semibold tracking-tight">Bappy Reja<span className="text-[#4de1ff]">.</span></span>
   </a>
   <div className="hidden md:flex items-center gap-7">{links.map(([href,label])=><a key={href} href={href} className="text-sm text-white/60 hover:text-white transition focus-ring">{label}</a>)}</div>
   <a href="#contact" className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm hover:border-[#4de1ff]/50 hover:text-[#4de1ff] transition focus-ring">Let's talk <ArrowUpRight size={14}/></a>
   <button onClick={()=>setOpen(!open)} className="md:hidden text-white focus-ring" aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button>
  </nav>
  {open&&<div className="md:hidden border-t border-white/10 bg-[#070b12]/95 backdrop-blur-xl px-5 py-4">{links.map(([h,l])=><a key={h} href={h} onClick={()=>setOpen(false)} className="block py-3 text-white/75">{l}</a>)}</div>}
 </header>
}
