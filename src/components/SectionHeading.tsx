export default function SectionHeading({index,title,intro,dark=false}:{index:string,title:string,intro?:string,dark?:boolean}){
 return <div className="max-w-3xl mb-14">
  <p className={`kicker mb-4 ${dark?"text-[#4de1ff]":"text-[#148da3]"}`}>{index}</p>
  <h2 className={`display text-4xl md:text-6xl tracking-tight leading-[.98] ${dark?"text-white":"text-[#091019]"}`}>{title}</h2>
  {intro&&<p className={`mt-5 text-base md:text-lg leading-relaxed max-w-2xl ${dark?"text-white/55":"text-[#091019]/60"}`}>{intro}</p>}
 </div>
}
