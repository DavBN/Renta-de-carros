import { Reveal } from "@/components/Shared/Reveal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function DriveToday() {
    return (
        <div className="p-6 lg:my-32 max-w-7xl mx-auto">
            <div className="bg-[url('/images/background.jpg')] bg-center bg-no-repeat bg-cover rounded-xl p-6 lg:p-32 relative">
                <div className="lg:flex gap-x-6">
                    <div>
                        <h3 className="text-4xl text-white">Maneja el carro de tus sueños</h3>
                        <p className="text-white text-xl my-5">Registrate y explora el mundo en un vehículo premium</p>
                        <Link href="/sign-in">
                            <Button variant="outline" size="lg">
                                Registrate aquí
                            </Button>
                        </Link>
                    </div>
                    <Reveal className="lg:absolute lg:-right-32 top-23" position="bottom">
                        <Image src="/images/porsche.avif"
                            alt="Carro de prueba"
                            width={700}
                            height={300}
                        />
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
