import { Reveal } from "@/components/Shared/Reveal";
import Image from "next/image";

export function FirstBlock() {
  return (
    <div className="grid lg:grid-cols-2 lg:px-0 lg:py-24 items-center">
        <Reveal className="p-6 lg:pl-40" position="bottom">
           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold">
            Premium
               <span className="block">Renta Carros </span>
               In the World
           </h1>
           <p className="text-lg mt-2 lg:mt-5 lg:text-xl max-w-sm">
            Carros premium con alta calidad, la mejor página de renta de carros en el mundo
           </p>
           </Reveal>
           <Reveal className="flex justify-end" position="right">
            <Image src="/images/porche.webp" alt="Carro Renta" width={800} height={800} priority />
           </Reveal>
    </div>
  )
}
